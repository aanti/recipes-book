import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import style from './Section.scss'

const Section = ({ title, children, className, titleColor }) => (
  <section className={classnames(style.section, className)}>
    <span className={style.title} style={{ color: titleColor }}>{title}</span>
    <div className={style.content}>
      {children}
    </div>
  </section>
)

Section.defaultProps = {
  title: ''
}

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.arrayOf(PropTypes.element)]).isRequired,
  className: PropTypes.string,
  titleColor: PropTypes.string
}

export default Section
