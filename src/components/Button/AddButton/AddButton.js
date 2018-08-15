import React from 'react'

import { Plus } from '../../Icon'

import style from './AddButton.scss'

const AddButton = ({ label, onClick }) => (
  <div className={style.container}>
    <div className={style.icon} onClick={onClick}>
      <Plus color="#f5f5f5" />
    </div>
    <div>{label}</div>
  </div>
)

export default AddButton
