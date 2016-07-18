import expect from 'expect.js'
import reducer from '../reducers/index.jsx'

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
    expect(state.komas.sente.banjyou.length).to.be.above(0)
  })
})

