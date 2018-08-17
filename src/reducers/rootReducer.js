import { combineReducers } from 'redux'
import { reducer as form } from 'redux-form'

import data from './data'
import ui from './ui'

export default combineReducers({
  data,
  ui,
  form
})
