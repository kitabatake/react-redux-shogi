import reducer from './reducers/index.jsx'
import {createStore, applyMiddleware} from 'redux'

// var initial_state = {
//   teban: 'sente',
//   komas: {
//     sente: {
//       motigoma: [],
//       banjyou: []
//     },
//     gote: {},
//   }
// }

// var tmp = reducer(initial_state, {type: 'hoge'})
// console.log(tmp)

// var store = createStore(reducer)
// store.dispatch({type: 'hoge'})

console.log(reducer(undefined, {}))
