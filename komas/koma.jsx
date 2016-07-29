import React from 'react';

import {Hu, Kin, Ou} from '../komas/index.jsx'

var id_num = 1
var komas = []
var ous = {}

class Koma {
  static reset() {
    id_num = 1;
    komas = []
  }

  static getById(id) {
    var koma = null
    komas.forEach(k => {
      if (k.id == id) koma = k
    })
    return koma
  }

  static toreruKoma(x, y) {
    var koma = null
    komas.forEach(k => {
      if (k.isBanjyou() && k.position.x == x && k.position.y == y) koma = k
    })
    return koma
  }

  static initiateKomas() {
    var komas = []
    komas.push(new Hu({
      position: {x: 3, y: 2},
      owner: 'sente'
    }))
    komas.push(new Kin({
      position: {x: 2, y: 2},
      owner: 'sente'
    }))

    var goteOu = new Ou({
      position: {x: 3, y: 0},
      owner: 'gote'
    })

    komas.push(goteOu)
    Koma.setOu(goteOu, 'gote')
    return komas
  }

  static setOu(koma, teban) {
    ous[teban] = koma
  }

  static tsumi(teban) {
    return ous[teban].tsumi()
  }

  static getMovableMap(owner) {
    var movableMap = []
    for (let i = 0; i < 9; i++) {
      movableMap[i] = []
      for (let j = 0; j < 9; j++) movableMap[i][j] = true
    }

    komas.forEach(koma => {
      if (koma.owner == owner) {
        movableMap[koma.position.y][koma.position.x] = false
      }
      else {
        koma.getMovablePositions().forEach(position => {
          movableMap[position.y][position.x] = false
        })
      }
    })

    return movableMap
  }

  constructor(options = {
    position: null,
    owner: null
  }) {
    this.id = id_num++
    this.owner = options.owner // SENTE or GOTE
    this.narigoma = false
    this.position = options.position
    this.previousPosition = null
    this.movement = null
    this.narigomaMovement = null

    komas.push(this)
  }

  torareru() {
    this.position = null
    this.narigoma = false
    this.owner = (this.owner == 'sente')? 'gote' : 'sente'
  }

  move(x, y) {
    this.previousPosition = Object.assign({}, this.position)
    this.position = {x, y}
  }

  canNareru() {
    if (this.narigoma || this.narigomaMovement == null) return false

    var targetNum = this.position.y
    if (this.owner == 'gote') targetNum = 8 - targetNum
    if (targetNum < 3) return true

    // narukaeru
    targetNum = this.previousPosition.y
    if (this.owner == 'gote') targetNum = 8 - targetNum
    if (targetNum < 3) return true

    return false
  }

  naru() {
    this.narigoma = true
  }

  isBanjyou() {
    return this.position != null
  }

  _canMove(x, y) {
    var movement = this.narigoma? this.narigomaMovement : this.movement
    
    for (var i = 0; i < movement.num; i++) {
      let tx = this.position.x + movement.dx[i]
      let ty
      if (this.owner == 'sente') {
        ty = this.position.y + movement.dy[i]
      }
      else {
        ty = this.position.y - movement.dy[i]
      }
      

      if (x == tx && y == ty) return true
    }

    return false
  }

  isAllyKoma(x, y) {
    var flag = false
    komas.forEach((koma) => {
      if (koma.isBanjyou() && koma.owner == this.owner && koma.position.x == x && koma.position.y == y){
        flag = true
      } 
    })
    return flag
  }

  isEmenyKoma(x, y) {
    var isEmenyKoma = false
    komas.forEach((koma) => {
      if (koma.isBanjyou() && koma.owner != this.owner && koma.position.x == x && koma.position.y == y) isEmenyKoma = true
    })
    return isEmenyKoma
  }

  canMove(x, y) {

    if (x < 0 || x > 8 || y < 0 || y > 8) return false
    if (this.isAllyKoma(x, y)) return false

    if (!this.isBanjyou()) {
      if (this.isEmenyKoma(x, y)) return false
      return true
    }

    return this._canMove(x, y)
  }

  getMovablePositions() {
    var positions = []
    var movement = this.narigoma? this.narigomaMovement : this.movement
    for (var i = 0; i < movement.num; i++) {
      let tx = this.position.x + movement.dx[i]
      let ty
      if (this.owner == 'sente') {
        ty = this.position.y + movement.dy[i]
      }
      else {
        ty = this.position.y - movement.dy[i]
      }

      positions.push({x: tx, y: ty})
    }

    return positions
  }

  _render() {}

  render() {
    var className = this.owner + '_koma'
    return (
      <div className={className}>{this._render()}</div>
    )
  }
}

export default Koma