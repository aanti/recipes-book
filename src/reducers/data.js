import uuid from 'uuid/v4'
import * as types from '../actions/actionTypes'

import recipes from '../mock'

const InitialState = recipes

function data (state = InitialState, action) {
  switch (action.type) {
    case types.ADD_RECIPE: {
      const { id } = action.payload
      if (id) {
        const { id } = action.payload
        const index = state.findIndex(item => item.id === id)
        return [...state.slice(0, index), action.payload, ...state.slice(index + 1)]
      } else {
        return [...state, { id: uuid(), ...action.payload }]
      }
    }
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
