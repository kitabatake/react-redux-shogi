import {changeTeban} from './teban.jsx'

export const initiateKomas = (dispatch) => {
  dispatch({
    type: 'initiate_komas'
  })
}

export const moveKoma = (dispatch, koma, x, y) => {
  dispatch({
    type: 'move_koma',
    koma: koma,
    x: x,
    y: y
  })

  if (koma.canNareru()) {
    if( window.confirm('成りますか?') ) {
      koma.naru()
    }
  }

  changeTeban(dispatch)
}
