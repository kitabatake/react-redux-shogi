import { combineReducers } from 'redux'

import teban from './teban.jsx'
import komas from './komas.jsx'
import selected_koma from './selected_koma.jsx'
import results from './results.jsx'

// all state

// {
//   teban: SENTE or GOTE,
//   komas: [],
//   selected_koma: null,
//   results: {
//     finish: bool,
//     winner: sente or gote
//   }
// }

const reducer = combineReducers({
  teban,
  komas,
  selected_koma,
  results
})

export default reducer