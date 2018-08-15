import { createStore, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'
import rootReducer from './reducers/rootReducer'

const logger = createLogger()

export default function configureStore() {
  return createStore(
    rootReducer,
    applyMiddleware(logger)
  )
}
