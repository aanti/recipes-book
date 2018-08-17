import uuid from 'uuid/v4'
import * as types from './actionTypes'

export const openModal = () => ({
  type: types.OPEN_MODAL
})

export const closeModal = () => ({
  type: types.CLOSE_MODAL
})

export const addRecipe = (values) => ({
  type: types.ADD_RECIPE,
  payload: { ...values, id: uuid() }
})
