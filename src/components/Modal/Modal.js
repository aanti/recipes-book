import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

import { BasicButton } from '../Button'

import style from './Modal.scss'

const Modal = ({ children, open, onOutsideClick }) => (
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
                <footer>
                  <BasicButton label="SAVE" disabled onClick={onOutsideClick} />
                  <BasicButton label="CANCEL" onClick={onOutsideClick} />
                </footer>
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
