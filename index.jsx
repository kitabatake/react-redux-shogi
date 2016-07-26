import React from 'react'
import ReactDOM from 'react-dom'
import {createStore, applyMiddleware} from 'redux'
import { Provider } from 'react-redux'

import {initiateKomas} from './actions/komas.jsx'
import reducer from './reducers/index.jsx'
import App from './components/app.jsx'

var store = createStore(reducer)

const render = () => {
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('container')
  )
}

render()
store.subscribe(render)
initiateKomas(store.dispatch)