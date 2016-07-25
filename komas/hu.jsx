import React from 'react';
import Koma from './koma.jsx'

class Hu extends Koma {

  constructor(options = {
    position: null,
    owner: null
  }) {
    super(options)
    this.movement = {
      num: 1,
      dx: [0],
      dy: [-1]
    }

    this.narigomaMovement = {
      num: 6,
      dx: [-1, 0, 1, -1, 1, 0],
      dy: [-1, -1, -1, 0, 0, 1]
    }
  }

  _render() {
    return this.narigoma? 'と' : '歩'
  }

}
export default Hu