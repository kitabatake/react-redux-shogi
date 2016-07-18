import Koma from '../komas/index.jsx'

const initiate_komas = (state, actino) => {
  var sente = {motigoma:[], banjyou: []}
  sente.banjyou.push(new Koma({x: 3, y: 6}))

  var gote = {motigoma:[], banjyou: []}
  return {sente: sente, gote: gote}
}

const move_koma = (state, action) => {
  // move
  state[action.player].banjyou.forEach(koma => {
    if (koma.id == action.id) {
      koma.move(action.x, action.y)
    }
  })

  return state
  // toru
}

const komas = (
  state = {
    sente: null,
    gote: null
  },
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