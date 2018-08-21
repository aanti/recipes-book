import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import configureStore from './store'
import { saveState } from './localStorageIntegrator'

import registerServiceWorker from './registerServiceWorker'
import App from './App'

import './index.css'

const store = configureStore()

store.subscribe(() => { saveState({ data: store.getState().data }) })

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'))
registerServiceWorker()
