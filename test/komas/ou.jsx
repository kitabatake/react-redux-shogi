import expect from 'expect.js'
import Ou from '../../komas/ou.jsx'
import Kin from '../../komas/kin.jsx'

const reset = () => {
  Ou.reset()
}

const createKoma = (x = 0, y = 0, owner = 'sente') => {
  return new Kin({
    position: {x: x, y: y},
    owner: owner
  })
}

describe('Ou#tsumi', () => {
  beforeEach(() => {
    reset()
  })

  it('is tsumanai situations', () => {
    var ou = new Ou({
      position: {x:8, y:8},
      owner: 'sente'
    })
    expect(ou.tsumi()).to.be(false)

    var kin = createKoma(6, 7, 'gote')
    expect(ou.tsumi()).to.be(false)
  })

  it('is tsumu situations', () => {
    var ou = new Ou({
      position: {x:8, y:8},
      owner: 'sente'
    })
    var kin = createKoma(7, 7, 'gote')
    var kin2 = createKoma(7, 6, 'gote')
    expect(ou.tsumi()).to.be(true)
  })
})