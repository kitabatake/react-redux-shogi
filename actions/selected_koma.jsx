export const selectKoma = (dispatch, id) => {
  dispatch({
    type: 'select_koma',
    id: id
  })
}