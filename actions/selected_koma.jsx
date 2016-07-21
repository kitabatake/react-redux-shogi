export const selectKoma = (dispatch, koma) => {
  dispatch({
    type: 'select_koma',
    koma: koma
  })
}