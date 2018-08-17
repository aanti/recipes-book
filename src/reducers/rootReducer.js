import { combineReducers } from 'redux'
import { reducer as form } from 'redux-form'

import ui from './ui'

export default combineReducers({
  ui,
  form
})
