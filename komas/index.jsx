var id_num = 1
var komas = []

class Koma {
  static reset() {
    id_num = 1;
    komas = []
  }

  static getById(id) {
    var koma
    komas.forEach(k => {
      if (k.id == id) koma = k
    })
    return koma
  }

  constructor(position, owner) {
    this.id = id_num++
    this.owner = owner // SENTE or GOTE
    this.nari = false
    this.movable = {
      x: [false, false, false, false, false, false, false, false, false], // left top to right bottom
      y: [false, false, false, false, false, false, false, false, false]
    }
    this.nari_movable = this.movable;
    this.position = position

    komas.push(this)
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
      movable.push({
        x:this.position.x + dx[i],
        y:this.position.y + dy[i]
      })
    }
    return movable
  }
}

export default Koma