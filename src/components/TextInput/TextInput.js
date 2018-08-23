import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import classnames from "classnames";

import style from './TextInput.scss'

class TextInput extends PureComponent {
  inputRef = React.createRef()
  state = {
    active: false,
    value: this.props.input.value
  }

  handleFocus = () => {
    this.setState({ active: true })
  }

  handleBlur = (e) => {
    const { input: { onBlur } } = this.props
    this.setState({ active: false })
    onBlur(e)
  }

  handleChange = () => {
    const { input: { onChange } } = this.props
    const value = this.inputRef.current.value
    this.setState({ value }, () => { onChange(value) })
  }

  render () {
    const { active, value } = this.state
    const { meta: { error, touched } = { error: '' }, className, label, type = 'input', placeholder } = this.props
    return (
      <div className={classnames(style.container, className)}>
        <div className={style.label}>{label}</div>
        {
          React.createElement(type, {
            ref: this.inputRef,
            placeholder,
            value,
            onFocus: this.handleFocus,
            onBlur: this.handleBlur,
            onChange: this.handleChange
          })
        }
        <div className={classnames(style.underline, active ? style.active : style.normal)} />
        <div className={style.errorText}>{touched && error}</div>
      </div>
    )
  }
}

TextInput.propTypes = {
  input: PropTypes.object, // from Redux-form decorator
  meta: PropTypes.object // from Redux-form decorator
}

export default TextInput
