import React from 'react'
import ReactDOM from 'react-dom'
import {createStore, applyMiddleware} from 'redux'
import { Provider } from 'react-redux'

import {dispatchInitiateKomas} from './actions/komas.jsx'
import reducer from './reducers/index.jsx'
import Ban from './components/ban.jsx'

var store = createStore(reducer)

const render = () => {
  ReactDOM.render(
    <Provider store={store}>
      <Ban />
    </Provider>,
    document.getElementById('container')
  )
}

render()
store.subscribe(render)
dispatchInitiateKomas(store.dispatch)