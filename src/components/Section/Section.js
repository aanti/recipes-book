import React from 'react'
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

export default Section
