
export const initiateKomas = (dispatch) => {
  dispatch({
    type: 'initiate_komas'
  })
}

export const moveKoma = (dispatch, id, x, y) => {
  dispatch({
    type: 'move_koma',
    id: id,
    x: x,
    y: y
  })
}
