import React from 'react';

var id_num = 1
var komas = []

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
      if (k.position.x == x && k.position.y == y) koma = k
    })
    return koma
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
    this.owner = (this.owner == 'sente')? 'gote' : 'sente'
  }

  move(x, y) {
    this.previousPosition = Object.assign({}, this.position)
    this.position = {x, y}
  }

  canNareru() {
    if (this.narigoma) return false

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
    if (!this.narigomaMovement) return
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

  canMove(x, y) {
    if (x < 0 || x > 8 || y < 0 || y > 8) return false

    var isAllyKoma = false
    komas.forEach((koma) => {
      if (koma.owner == this.owner && koma.x == x && koma.y == y) isAllyKoma = true
    })

    if (isAllyKoma) return false

    return this._canMove(x, y)
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