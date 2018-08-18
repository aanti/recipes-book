import * as types from '../actions/actionTypes'

const InitialState = {
  modal: {
    open: false
  },
  activeItemId: null
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
      return action.payload.id
    case types.ADD_RECIPE:
    case types.CLOSE_MODAL:
      return null
    default:
      return state
  }
}

function ui (state = InitialState, action) {
  switch (action.type) {
    case types.ADD_RECIPE:
    case types.CLOSE_MODAL:
    case types.MODIFY_RECIPE:
    case types.OPEN_MODAL:
      return { ...state, modal: modal(state.modal, action), activeItemId: activeItemId(state.activeItemId, action) }
    default:
      return state
  }
}

export default ui
