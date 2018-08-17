import * as types from '../actions/actionTypes'

import recipes from '../mock'

const InitialState = recipes

function data (state = InitialState, action) {
  switch (action.type) {
    case types.ADD_RECIPE:
      return [...state, action.payload]
    default:
      return state
  }
}

export default data
