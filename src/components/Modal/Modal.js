import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import classnames from 'classnames'

import style from './Modal.scss'

const Modal = ({ children, className, open }) => (
  <div className={style.container}>
    {
      open
        ?
          <Fragment>
            <div className={style.background}>
              <div className={classnames(style.modal, className)}>
                {children}
              </div>
              <Helmet bodyAttributes={{ style: 'overflow: hidden' }}/>
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
