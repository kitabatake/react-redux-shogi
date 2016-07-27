import {Koma, Ou} from '../komas/index.jsx'

const finish = (state = false, action) => {
  switch(action.type) {
    case 'move_koma':
      let teban = action.koma.owner == 'sente'? 'gote' : 'sente'
      return Ou.tsumi(teban)
    default:
      return state
  }
}

const winner = (state = '', action, fin) => {
  switch(action.type) {
    case 'move_koma' :
      if (fin) {
        return action.koma.owner
      }
    default:
      return state
  }
}

const results = (
  state = {finish: false, winner: ''},
  action
) => {

  var fin = finish(state.finish, action)
  var win = winner(state.winner, action, fin)
  return {
    finish: fin,
    winner: win
  }
}

export default results