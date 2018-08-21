import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import style from './BasicButton.scss'

const BasicButton = ({ label, disabled, onClick }) => {
  const className = classnames(style.container, disabled && style.disabled)
  return (
    <div className={className} {...(!disabled && { onClick })}>
      {label}
    </div>
  )
}

BasicButton.defaultProps = {
  onClick: () => {}
}

BasicButton.propTypes = {
  label: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  onClick: PropTypes.func
}

export default BasicButton
