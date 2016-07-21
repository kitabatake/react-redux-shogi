import React from 'react';
import Koma from './koma.jsx'

class Kin extends Koma {

  _render() {
    return '金'
  }

  _canMove(x, y) {
    var dx = [-1, 0, 1, -1, 1, 0]
    var dy = [-1, -1, -1, 0, 0, 1]
    for (var i = 0; i < 6; i++) {
      let tx = this.position.x + dx[i]
      let ty
      if (this.owner == 'sente') {
        ty = this.position.y + dy[i]
      }
      else {
        ty = this.position.y - dy[i]
      }
      

      if (x == tx && y == ty) return true
    }

    return false
  }
}
export default Kin