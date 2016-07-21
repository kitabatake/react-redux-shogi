import Koma from '../komas/index.jsx'

const initiate_komas = (state, action) => {

  var komas = []
  komas.push(new Koma({x: 3, y: 6}))
  komas.push(new Koma({x:0, y:0}))
  
  return komas
}

const move_koma = (state, action) => {
  // move
  state.forEach(koma => {
    if (koma.id == action.id) {
      koma.move(action.x, action.y)
    }
  })

  return state
  // toru
}

const komas = (
  state = [],
  action
) => {
  switch(action.type) {
    case 'move_koma':
      return move_koma(state, action)
      break
    case 'initiate_komas':
      return initiate_komas(state, action)
    default:
      return state
  }
}

export default komas