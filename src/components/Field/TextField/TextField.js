import React, { Component } from 'react'
import classnames from 'classnames'

import { Field, FieldArray } from 'redux-form'

import { AddButton } from '../../Button'

import style from './TextField.scss'

export class TextInput extends Component {
  inputRef = React.createRef()
  state = {
    active: false,
    value: this.props.input.value
  }

  handleFocus = () => {
    this.setState({ active: true })
  }

  handleBlur = () => {
    this.setState({ active: false })
  }

  handleChange = () => {
    const { input: { onChange } } = this.props
    const value = this.inputRef.current.value
    this.setState({ value }, () => { onChange(value) })
  }

  render () {
    const { active } = this.state
    const { input: { value }, meta: { error } = { error: '' }, className, label, type = 'input', placeholder } = this.props
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
        <div className={style.errorText}>{error}</div>
      </div>
    )
  }
}

export const TextField = ({ name, ...rest }) => (
  <Field name={name} component={TextInput} {...rest} />
)

export const TextInputArray = ({ fields = [], meta, ...props }) => (
  <div>
    {
      fields.map(field => (
        <div className={style.arrayItem}>
          <div />
          <TextField name={field} {...props} />
        </div>
      ))
    }
    <AddButton label="Add new step" size={9} width={110} onClick={() => fields.push()} />
  </div>
)

export const TextFieldArray = ({ name, ...rest }) => (
  <FieldArray name={name} component={TextInputArray} {...rest} />
)