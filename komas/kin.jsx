import React from 'react';
import Koma from './koma.jsx'

class Kin extends Koma {

  constructor(options = {
    position: null,
    owner: null
  }) {
    super(options)
    this.movement = {
      num: 6,
      dx: [-1, 0, 1, -1, 1, 0],
      dy: [-1, -1, -1, 0, 0, 1]
    }
  }

  _render() {
    return '金'
  }
  
}
export default Kin