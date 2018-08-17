import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

import { BasicButton } from '../Button'

import style from './Modal.scss'

const Modal = ({ children, open }) => (
  <div className={style.container}>
    {
      open
        ?
          <Fragment>
            <div className={style.background}>
              <div className={style.modal}>
                <div className={style.content}>
                  {children}
                </div>
              </div>
            </div>
          </Fragment>
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
