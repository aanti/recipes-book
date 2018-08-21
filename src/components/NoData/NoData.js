import React from 'react'
import PropTypes from 'prop-types'

import style from './NoData.scss'

const NoData = ({ text }) => (
  <div className={style.container}>
    {text}
  </div>
)

NoData.defaultProps = {
  text: 'You have no recipes in your collection.'
}

NoData.propTypes = {
  text: PropTypes.string
}

export default NoData