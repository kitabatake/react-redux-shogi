import expect from 'expect.js'
import reducer from '../../reducers/index.jsx'
import Koma from '../../komas/index.jsx'

const initialState = () => {
  Koma.reset()
  return reducer(
    reducer(undefined, {}),
    { type: 'initiate_komas' }
  )
}

describe('default komas state', function() {  
  it('should be empty array', function() {
    var default_state = reducer(undefined, {});
    expect(default_state.komas).to.be.an('array')
    expect(default_state.komas.length).to.eql(0)
  });
});

describe('initiateKomas action', function() {
  it('sente has komas', () => {
    var initiated_state = initialState()
    expect(initiated_state.komas.length).to.be.above(0)
  })
})

describe('move_koma action', () => {
  it('specified id koma shoud be moved given position', () => {
    
    var initiated_state = initialState()

    var koma = Koma.getById(1)

    var state = reducer(
      initiated_state,
      {
        type: 'move_koma',
        teban: 'sente',
        koma: koma,
        x: 1,
        y: 2
      }
    )

    expect(koma.position.x).to.be(1)
    expect(koma.position.y).to.be(2)
  })
})