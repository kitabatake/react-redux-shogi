import React from 'react';
import Koma from './koma.jsx'

class Ou extends Koma {

  constructor(options = {
    position: null,
    owner: null
  }) {
    super(options)
    this.movement = {
      num: 8,
      dx: [-1, 0, 1, -1, 1, -1, 0, 1],
      dy: [-1, -1, -1, 0, 0, 1, 1, 1]
    }
  }

  tsumi() {
    var movableMap = Koma.getMovableMap(this.owner)
    var tsumi = true

    for (var i = 0; i < this.movement.num; i++) {
      let tx = this.position.x + this.movement.dx[i]
      let ty
      if (this.owner == 'sente') {
        ty = this.position.y + this.movement.dy[i]
      }
      else {
        ty = this.position.y - this.movement.dy[i]
      }

      if (tx < 0 || tx > 8 || ty < 0 || ty > 8) continue
      if (movableMap[ty][tx]) tsumi = false
    }
    return tsumi
  }

  _render() {
    return '王'
  }
  
}
export default Ou