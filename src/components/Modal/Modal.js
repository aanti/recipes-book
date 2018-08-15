import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

import style from './Modal.scss'

const Modal = ({ children, open, onOutsideClick }) => (
  <div className={style.container}>
    {
      open
        ?
          <Fragment>
            <div className={style.background} onClick={e => { console.log(e.nativeEvent); onOutsideClick() }}>
            </div>
            <div className={style.modal} onClick={e => { console.log(e.nativeEvent); e.nativeEvent.preventDefault() }}>
              {children}
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
