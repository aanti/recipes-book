import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import Modal from '../../components/Modal/Modal'
import { BasicButton } from '../../components/Button'

import { closeConfirmationDialog, deleteRecipe } from '../../actions'

import style from './ConfirmationDialog.scss'

const ConfirmationDialog = ({ name, id, open, onApply, onCancel }) => (
  <Modal className={style.container} open={open}>
    <div className={style.question}>
      Are you sure you want to delete recipe&nbsp;<span className={style.name}>{name}</span> ?
    </div>
    <footer>
      <BasicButton label="yes, delete" onClick={() => onApply(id)} />
      <BasicButton label="cancel" onClick={onCancel} />
    </footer>
  </Modal>
)

ConfirmationDialog.propTypes = {
  name: PropTypes.string,
  id: PropTypes.string,
  open: PropTypes.bool.isRequired,
  onApply: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired
}

const mapStateToProps = ({ ui }) => ({
  id: ui.activeItemId,
  open: ui.deleteDialog.open
})

const mapDispatchToProps = dispatch => ({
  onApply: (id) => dispatch(deleteRecipe(id)),
  onCancel: () => dispatch(closeConfirmationDialog())
})

export default connect(mapStateToProps, mapDispatchToProps)(ConfirmationDialog)