import * as types from './actionTypes'

export const openModal = () => ({
  type: types.OPEN_MODAL
})

export const closeModal = () => ({
  type: types.CLOSE_MODAL
})

export const addRecipe = (values) => ({
  type: types.ADD_RECIPE,
  payload: values
})

export const deleteRecipe = (id) => ({
  type: types.DELETE_RECIPE,
  payload: { id }
})

export const modifyRecipe = (id) => ({
  type: types.MODIFY_RECIPE,
  payload: { id }
})

export const openConfirmationDialog = (id) => ({
  type: types.OPEN_DELETE_DIALOG,
  payload: { id }
})

export const closeConfirmationDialog = () => ({
  type: types.CLOSE_DELETE_DIALOG
})