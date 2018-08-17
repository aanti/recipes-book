import React from 'react'

import style from './Section.scss'

const Section = ({ title, children, titleColor }) => (
  <section className={style.section}>
    <span className={style.title} style={{ color: titleColor }}>{title}</span>
    <div className={style.content}>
      {children}
    </div>
  </section>
)

export default Section
