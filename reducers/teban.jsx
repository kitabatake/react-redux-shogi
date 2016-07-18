const teban = (state = 'sente', action) => {
  switch(action.type) {
    case 'move':
      if (state == 'sente') return 'gote'
      else return 'sente'
      break;
    default:
      return state
  }
}

export default teban