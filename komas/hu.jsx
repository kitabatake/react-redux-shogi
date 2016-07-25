import React from 'react';
import Koma from './koma.jsx'

class Hu extends Koma {

  _render() {
    return '歩'
  }

  _canMove(x, y) {
    var ty
    if (this.owner == 'sente') ty = this.position.y - 1
    else ty = this.position.y + 1
    return x == this.position.x && y == ty
  }

}
export default Hu