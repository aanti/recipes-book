import React from 'react'

const Delete = ({ color = '#000', size = 10, ...props }) => (
  <div>
    <svg viewBox="0 0 126.753 126.753" height={size} width={size} {...props}>
      <g
        fill="none"
        fillRule="evenodd"
        stroke={color}
        strokeWidth={16.511}
        strokeLinecap="round"
      >
        <path d="M8.339 8.339l110.075 110.075M118.414 8.339L8.34 118.414" />
      </g>
    </svg>
  </div>
)

export default Delete
