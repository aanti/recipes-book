import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import { Plus } from '../../Icon'

import style from './AddButton.scss'

const AddButton = ({ label, size, className, width, onClick }) => (
  <div className={classnames(style.container, className)} style={{ width }} onClick={onClick}>
    <div className={style.icon} style={{ width: size, height: size }}>
      <Plus color="#f5f5f5" />
    </div>
    <div>{label}</div>
  </div>
)

AddButton.defaultProps = {
  label: '',
  size: 12,
  width: 150,
  onClick: () => {}
}

AddButton.propTypes = {
  label: PropTypes.string,
  size: PropTypes.number,
  className: PropTypes.string,
  width: PropTypes.number,
  onClick: PropTypes.func
}

export default AddButton
