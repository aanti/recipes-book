import React from 'react'

import { connect } from 'react-redux'

import Modal from './components/Modal/Modal'
import RecipeList from './views/RecipeList/RecipeList'
import RecipeForm from './views/RecipeForm/RecipeForm'
import ConfirmationDialog from './views/RecipeList/RecipeItem/ConfirmationDialog/ConfirmationDialog'

import {
  closeModal,
  addRecipe,
  deleteRecipe,
  closeConfirmationDialog,
  openConfirmationDialog,
  openModal,
  modifyRecipe
} from './actions'

import style from './App.scss'

const App = ({
  ui,
  name,
  initialValues,
  onModalClose,
  onModalOpen,
  onSubmit,
  onDeleteConfirm,
  onDeleteRequest,
  onDeleteCancel,
  onModify
}) => {
  const { activeItemId: id, deleteDialog, modal } = ui
  return (
    <div className={style.App}>
      <RecipeList onDelete={onDeleteRequest} onModify={onModify} onNewRecipeClick={onModalOpen} />
      <Modal open={modal.open}>
        <RecipeForm onSubmit={onSubmit} onCancel={onModalClose} initialValues={initialValues} />
      </Modal>
      <ConfirmationDialog
        id={id}
        name={name}
        open={deleteDialog.open}
        onApply={onDeleteConfirm}
        onCancel={onDeleteCancel}
      />
    </div>
  )
}

const initialValuesSelector = state => {
  const { data, ui: { activeItemId } } = state
  if (!activeItemId) {
    return undefined
  }
  const index = data.findIndex(item => item.id === activeItemId)
  return (index !== -1) ? data[index] : undefined
}

const mapStateToProps = (state) => {
  const initialValues = initialValuesSelector(state)
  const name = (initialValues || {}).name
  return { ui: state.ui, initialValues, name }
}

const mapDispatchToProps = (dispatch) => ({
  onModalClose: () => dispatch(closeModal()),
  onModalOpen: () => dispatch(openModal()),
  onModify: (id) => dispatch(modifyRecipe(id)),
  onSubmit: (values) => dispatch(addRecipe(values)),
  onDeleteConfirm: (id) => dispatch(deleteRecipe(id)),
  onDeleteRequest: (id) => dispatch(openConfirmationDialog(id)),
  onDeleteCancel: () => dispatch(closeConfirmationDialog())
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
