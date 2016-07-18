import Koma from '../komas/index.jsx'

const initiate_komas = (state, actino) => {
  var sente = {motigoma:[], banjyou: []}
  sente.banjyou.push(new Koma({x: 3, y: 6}))

  var gote = {motigoma:[], banjyou: []}
  return {sente: sente, gote: gote}
}

const sente = (
  state = {
    motigoma: [],
    banjyou: []
  },
  action
) => {
  switch(action.type) {
    case 'move':
      if (action.player != 'sente') return state
      // TODO move
      break
    default:
      return state
  }
}

const move = (state, action) => {
  // move
  state[action.player].motigoma.forEach(koma => {
    if (koma.id == action.id) {
      koma.move(action.position.x, action.position.y)
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
    case 'move':
      return move(state, action)
      break
    case 'initiate_komas':
      return initiate_komas(state, action)
    default:
      return state
  }
}

export default komas