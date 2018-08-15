import React from 'react'
import PropTypes from 'prop-types'

import style from './Modal.scss'

const Modal = ({ open, onOutsideClick }) => (
  <div className={style.container}>
    {
      open
        ?
          <div className={style.background} onClick={onOutsideClick}>
            <div className={style.modal}>
              modal
            </div>
          </div>
        :
          null
    }
  </div>
)

Modal.propTypes = {
  open: PropTypes.bool,
  onOutsideClick: PropTypes.func
}

export default Modal
