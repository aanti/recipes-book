import React from 'react'
import classnames from 'classnames'

import style from './BasicButton.scss'

const BasicButton = ({ label, disabled, onClick }) => (
  <div
    className={classnames(style.container, disabled && style.disabled)}
    {...(!disabled && { onClick })}
  >{label}</div>
)

export default BasicButton
