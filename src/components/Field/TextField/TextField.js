import React, { Component } from 'react'
import classnames from 'classnames'

import style from './TextField.scss'

export class TextInput extends Component {
  inputRef = React.createRef()
  state = {
    active: false
  }

  handleFocus = () => {
    this.setState({ active: true })
  }

  handleBlur = () => {
    this.setState({ active: false })
  }

  render () {
    const { active } = this.state
    const { input, meta: { error } = { error: '' }, label, type = 'input' } = this.props
    return (
      <div className={style.container}>
        <div className={style.label}>{label}</div>
        {
          React.createElement(type, { ref: this.inputRef, onFocus: this.handleFocus, onBlur: this.handleBlur })
        }
        <div className={classnames(style.underline, active ? style.active : style.normal)} />
        <div className={style.errorText}>{error}</div>
      </div>
    )
  }
}