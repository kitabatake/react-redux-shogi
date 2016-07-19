
export const initiateKomas = (dispatch) => {
  dispatch({
    type: 'initiate_komas'
  })
}

export const moveKoma = (dispatch, id, player, x, y) => {
  dispatch({
    type: 'move_koma',
    id: id,
    player: player,
    x: x,
    y: y
  })
}
