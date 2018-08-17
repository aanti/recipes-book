import * as types from '../actions/actionTypes'

const InitialState = {
  modal: {
    open: false
  }
}

function modal (state = InitialState.modal, action) {
  switch (action.type) {
    case types.OPEN_MODAL:
      return { ...state, open: true }
    case types.CLOSE_MODAL:
      return {...state, open: false }
    default:
      return state
  }
}

function ui (state = InitialState, action) {
  switch (action.type) {
    case types.OPEN_MODAL:
    case types.CLOSE_MODAL:
      return {...state, modal: modal(state.modal, action) }
    default:
      return state
  }
}

export default ui
