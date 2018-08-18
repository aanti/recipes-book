import * as types from '../actions/actionTypes'
import { combineReducers } from 'redux'

const InitialState = {
  activeItemId: null,
  deleteDialog: { open: false },
  modal: { open: false }
}

function deleteDialog (state = InitialState.deleteDialog, action) {
  switch (action.type) {
    case types.OPEN_DELETE_DIALOG:
      return { ...state, open: true }
    case types.DELETE_RECIPE:
    case types.CLOSE_DELETE_DIALOG:
      return {...state, open: false }
    default:
      return state
  }
}

function modal (state = InitialState.modal, action) {
  switch (action.type) {
    case types.MODIFY_RECIPE:
    case types.OPEN_MODAL:
      return { ...state, open: true }
    case types.ADD_RECIPE:
    case types.CLOSE_MODAL:
      return {...state, open: false }
    default:
      return state
  }
}

function activeItemId (state = InitialState.activeItemId, action) {
  switch (action.type) {
    case types.MODIFY_RECIPE:
    case types.OPEN_DELETE_DIALOG:
      return action.payload.id
    case types.ADD_RECIPE:
    case types.CLOSE_MODAL:
    case types.CLOSE_DELETE_DIALOG:
    case types.DELETE_RECIPE:
      return null
    default:
      return state
  }
}

export default combineReducers({
  deleteDialog,
  modal,
  activeItemId
})
