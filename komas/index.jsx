
class Koma {
  constructor() {
    this.id = null
    this.owner = null // SENTE or GOTE
    this.nari = false
    this.movable = {
      x: [false, false, false, false, false, false, false, false, false], // left top to right bottom
      y: [false, false, false, false, false, false, false, false, false]
    }
    this.nari_movable = movable;
    this.position = {x: null, y: null}
  }

  move(x, y) {
    this.position = {x, y}
  }

  naru() {
    this.naru = true
  }

  // get movable positions array
  movalbe() {
    var movable = []
    var dx = [-1, 0, 1, -1, 0, 1, -1, 0, 1]
    var dy = [-1, -1, -1, 0, 0, 0, 1, 1, 1]
    for (let i = 0; i < 9; i++) {
      if (!this.movable.x[i] || !this.movable.y[i]) continue
      let x = 
      let y = 
      movable.push({
        this.position.x + dx[i],
        this.position.y + dy[i]
      })
    }
    return movable
  }
}