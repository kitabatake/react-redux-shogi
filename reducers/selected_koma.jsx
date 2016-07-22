const selected_koma = (state = null, action) => {
  switch(action.type) {
    case 'select_koma':
      return action.koma
      break
    case 'cancel_selected_koma':
      return null
      break
    default:
      return null
  }
}

export default selected_koma