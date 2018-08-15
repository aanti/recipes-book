import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import configureStore from './store'


import registerServiceWorker from './registerServiceWorker'
import App from './App'

import './index.css'

if (module.hot) {
  module.hot.accept()
}

ReactDOM.render(
  <Provider store={configureStore()}>
    <App />
  </Provider>,
  document.getElementById('root'))
registerServiceWorker()
