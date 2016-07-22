export const selectKoma = (dispatch, koma) => {
  dispatch({
    type: 'select_koma',
    koma: koma
  })
}

export const cancelSelectedKoma = (dispatch) => {
  dispatch({
    type: 'cancel_selected_koma'
  })
}