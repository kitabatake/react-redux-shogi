import { combineReducers } from 'redux'

import teban from './teban.jsx'
import komas from './komas.jsx'

// all state

// {
//   teban: SENTE or GOTE,
//   komas: {
//     sente: []
//     gote: [],
//   }

//   UI STATE
// }

const reducer = combineReducers({
  teban,
  komas
})

export default reducer