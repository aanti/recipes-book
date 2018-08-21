import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import Modal from '../../components/Modal/Modal'
import RecipeForm from './RecipeForm/RecipeForm'

import { addRecipe, closeModal } from '../../actions'

import style from './RecipeCreate.scss'

const RecipeCreate = ({ open, initialValues, onSubmit, onClose }) => (
  <Modal open={open} className={style.modal}>
    <RecipeForm onSubmit={onSubmit} onCancel={onClose} initialValues={initialValues} />
  </Modal>
)

RecipeCreate.propTypes = {
  open: PropTypes.bool.isRequired,
  initialValues: PropTypes.object,
  onSubmit: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired
}

const mapStateToProps = ({ ui }) => ({ open: ui.modal.open })

const mapDispatchToProps = dispatch => ({
  onClose: () => dispatch(closeModal()),
  onSubmit: (values) => dispatch(addRecipe(values))
})

export default connect(mapStateToProps, mapDispatchToProps)(RecipeCreate)