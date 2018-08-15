import { createStore, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'
import rootReducer from './reducers/rootReducer'

const logger = createLogger()

export default function configureStore() {
  const store = createStore(
    rootReducer,
    applyMiddleware(logger)
  )
  if (module.hot) {
    module.hot.accept('./reducers/rootReducer', () => {
      const nextRootReducer = require('./reducers/rootReducer')
      store.replaceReducer(nextRootReducer)
    })
  }
  return store
}
