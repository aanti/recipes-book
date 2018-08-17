import React, { Component } from 'react'
import classnames from 'classnames'

import { Field, FieldArray } from 'redux-form'

import { AddButton } from '../../Button'
import { Delete as DeleteIcon } from '../../Icon'

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

export const TextFieldArray = ({ name, ...rest }) => (
  <FieldArray name={name} component={InputArray} {...rest}>
    {
      (field) => <TextField name={field} {...rest} />
    }
  </FieldArray>
)

export const IngredientArray = ({ name, ...rest }) => (
  <FieldArray name={name} component={InputArray} {...rest}>
    {
      (field) => (
        <div className={style.ingredient}>
          <TextField name={`${field}.product`} className={style.product} placeholder="name of product" />
          <TextField name={`${field}.amount`} className={style.amount} placeholder="amount / unit" />
        </div>
      )
    }
  </FieldArray>
)


export const InputArray = ({ children, fields = [], meta, newItemLabel, ...props }) => (
  <div>
    {
      fields.map((field, i) => (
        <div className={style.arrayItem}>
          <div />
          { children(field, i) }
          { (fields.length > 1) && <DeleteIcon size={10} color="lightgray" onClick={() => fields.remove(i)} /> }
        </div>
      ))
    }
    <AddButton label={newItemLabel} size={9} width={110} onClick={() => fields.push()} />
  </div>
)
