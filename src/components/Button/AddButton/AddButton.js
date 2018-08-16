import React from 'react'
import classnames from 'classnames'

import { Plus } from '../../Icon'

import style from './AddButton.scss'

const AddButton = ({ label, size = 12, className, width = 150, onClick }) => (
  <div className={classnames(style.container, className)} style={{ width }} onClick={onClick}>
    <div className={style.icon} style={{ width: size, height: size }}>
      <Plus color="#f5f5f5" />
    </div>
    <div>{label}</div>
  </div>
)

export default AddButton
