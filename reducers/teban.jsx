const teban = (state = 'sente', action) => {
  switch(action.type) {
    case 'move_koma':
      if (state == 'sente') return 'gote'
      else return 'sente'
      break;
    default:
      return state
  }
}

export default teban