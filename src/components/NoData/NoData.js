import React from 'react'

import style from './NoData.scss'

const NoData = ({ text = 'You have no recipes in your collection.' }) => (
  <div className={style.container}>
    {text}
  </div>
)

export default NoData