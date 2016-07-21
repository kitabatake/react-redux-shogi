import { combineReducers } from 'redux'

import teban from './teban.jsx'
import komas from './komas.jsx'
import selected_koma from './selected_koma.jsx'

// all state

// {
//   teban: SENTE or GOTE,
//   komas: [],
//   selected_koma: null
// }

const reducer = combineReducers({
  teban,
  komas,
  selected_koma
})

export default reducer