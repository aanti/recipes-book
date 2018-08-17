import { createStore, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'
import rootReducer from './reducers/rootReducer'
import { loadState } from './localStorageIntegrator'

const logger = createLogger()
const persistedState = loadState()

export default function configureStore() {
  const store = createStore(
    rootReducer,
    persistedState,
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
