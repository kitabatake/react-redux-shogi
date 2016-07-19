const selected_koma = (state = null, action) => {
  switch(action.type) {
    case 'select_koma':
      return action.id
      break
    default:
      return null
  }
}

export default selected_koma