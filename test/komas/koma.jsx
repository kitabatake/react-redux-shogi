import expect from 'expect.js'
import {Koma} from '../../komas/index.jsx'

const reset = () => {
  Koma.reset()
}

const createKoma = (x = 0, y = 0, owner = 'sente') => {
  return new Koma({
    position: {x, y},
    owner: owner
  })
}

describe('Koma#constructor', () => {
  it('sets positions and owner', () => {
    var koma = createKoma(1, 2, 'sente')
    expect(koma.position.x).to.be(1)
    expect(koma.position.y).to.be(2)
    expect(koma.owner).to.be('sente')
  })
})

describe('Koma#move', () => {
  it('should be set spefified position', () => {
    reset()
    var koma = createKoma(1, 2, 'sente')
    koma.move(3, 5)
    expect(koma.position.x).to.be(3)
    expect(koma.position.y).to.be(5)
  })
})

describe('Koma::getById', () => {
  beforeEach(() => {
    reset()
  })
  it('should be null if there is not matched koma', () => {
    expect(Koma.getById(1)).to.be(null)
  })

  it('should return mached koma', () => {
    var koma = createKoma(1, 3, 'sente')
    expect(Koma.getById(1)).to.be(koma)
  })
})

describe('Koma#torareru', () => {
  beforeEach(() => {
    reset()
  })

  it("position is null and owner toggled ", () => {
    var koma1 = createKoma(1, 2, 'sente')
    koma1.torareru()
    expect(koma1.position).to.be(null)
    expect(koma1.owner).to.be('gote')
  })
})

describe('Koma::toreruKoma', () => {
  beforeEach(() => {
    reset()
  })

  it('should null if thre is no matched koma', () => {
    expect(Koma.toreruKoma(1, 1)).to.be(null)
    var koma = createKoma(1, 3, 'sente')
    expect(Koma.toreruKoma(1, 1)).to.be(null)
  })

  it('should return mached koma', () => {
    var koma = createKoma(1, 3, 'sente')
    expect(Koma.toreruKoma(1, 3)).to.be(koma)
  })
})

describe('Koma#canNareru', () => {
  beforeEach(() => {
    reset()
  })

  it('is narenai situations', () => {
    var koma = createKoma(5, 5, 'sente')
    koma.move(5, 4)
    expect(koma.canNareru()).to.be(false)
    koma.move(5, 3)
    expect(koma.canNareru()).to.be(false)

    koma = createKoma(5, 4, 'gote')
    koma.move(5, 5)
    expect(koma.canNareru()).to.be(false)

    // if koma already naru, canNareru() return false
    koma.naru()
    koma.move(5, 8)
    expect(koma.canNareru()).to.be(false)
  })

  it('is nareru situations', () => {
    var koma = createKoma(5, 3, 'sente')
    koma.move(5, 2)
    expect(koma.canNareru()).to.be(true)

    koma = createKoma(5, 2, 'sente')
    koma.move(4, 8)
    expect(koma.canNareru()).to.be(true)

    koma = createKoma(5, 3, 'gote')
    koma.move(3, 6)
    expect(koma.canNareru()).to.be(true)

  })
})