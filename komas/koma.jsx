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
    this.nari = false
    this.position = options.position

    komas.push(this)
  }

  torareru() {
    this.position = null
    this.owner = (this.owner == 'sente')? 'gote' : 'sente'
  }

  move(x, y) {
    this.position = {x, y}
  }

  naru() {
    this.naru = true
  }

  isBanjyou() {
    return this.position != null
  }

  // overrite child class
  _canMove(x, y) {
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