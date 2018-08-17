import * as types from '../actions/actionTypes'

import recipes from '../mock'

const InitialState = recipes

function data (state = InitialState, action) {
  switch (action.type) {
    case types.ADD_RECIPE:
      return [...state, action.payload]
    case types.DELETE_RECIPE: {
      const { id } = action.payload
      const index = state.findIndex(item => item.id === id)
      return [...state.slice(0, index), ...state.slice(index + 1)]
    }
    default:
      return state
  }
}

export default data
