import React from 'react'

import Modal from '../../../../components/Modal/Modal'
import { BasicButton } from '../../../../components/Button'

import style from './ConfirmationDialog.scss'

const ConfirmationDialog = ({ name, id, open, onApply, onCancel }) => (
  <Modal className={style.container} open={open}>
    <div className={style.question}>
      Are you sure you want to delete recipe <span className={style.name}>{name}</span> ?
    </div>
    <footer>
      <BasicButton label="yes, delete" onClick={() => onApply(id)} />
      <BasicButton label="cancel" onClick={onCancel} />
    </footer>
  </Modal>
)

export default ConfirmationDialog