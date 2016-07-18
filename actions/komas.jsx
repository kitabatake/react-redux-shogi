
const export dispatchInitiateKomas = (dispatch) => {
  dispatch({
    type: 'initiate_komas'
  })
}

const export dispatchMoveKoma = (dispatch, id, player, x, y) => {
  dispatch({
    type: 'move_koma',
    id: id,
    player: player,
    x: x,
    y: y
  })
}
