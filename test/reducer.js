import expect from 'expect.js'
import reducer from '../reducers/index.jsx'
import Koma from '../komas/index.jsx'

describe('default komas state', function() {  
  it('should has only sente, gote property', function() {
    var default_state = reducer(undefined, {});
    expect(default_state.komas).to.only.have.keys('sente', 'gote')
  });
});

describe('initiateKomas action', function() {
  it('sente has komas', () => {
    var def = reducer(undefined, {})
    var state = reducer(
      def,
      {
        type: 'initiate_komas'
      }
    )
    expect(state.komas.sente.length).to.be.above(0)
  })
})

describe('move_koma action', () => {
  it('specified id koma shoud be moved given position', () => {
    Koma.resetIdNum()
    var initiated_state = reducer(
      reducer(undefined, {}),
      { type: 'initiate_komas' }
    )
    var state = reducer(
      initiated_state,
      {
        type: 'move_koma',
        player: 'sente',
        id: 1,
        x: 1,
        y: 2
      }
    )

    var komas = state.komas.sente.filter(koma => koma.id == 1)
    expect(komas.length).to.be(1)
    expect(komas[0].position.x).to.be(1)
    expect(komas[0].position.y).to.be(2)
  })
})