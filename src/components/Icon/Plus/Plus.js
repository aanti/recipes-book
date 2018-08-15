import React from 'react'
import PropTypes from 'prop-types'

const Plus = ({ color, ...props }) => (
  <svg
    viewBox="0 0 135.442 135.442"
    height={144.472}
    width={144.472}
    {...props}
  >
    <path
      d="M67.721 10.142V125.3M10.142 67.72H125.3"
      fill="none"
      fillRule="evenodd"
      stroke={color}
      strokeWidth={20}
      strokeLinecap="round"
    />
  </svg>
)

Plus.defaultProps = {
  color: "#000"
}

Plus.propTypes = {
  color: PropTypes.string
}

export default Plus