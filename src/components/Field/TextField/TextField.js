import React from 'react'
import { Field, FieldArray } from 'redux-form'

import { AddButton } from '../../Button'
import { Delete as DeleteIcon } from '../../Icon'
import TextInput from '../../TextInput/TextInput'

import { required } from '../../../utils/validation'

import style from './TextField.scss'

export const TextField = ({ name, ...rest }) => (
  <Field name={name} component={TextInput} {...rest} />
)

export const TextFieldArray = ({ name, validate, ...rest }) => (
  <FieldArray name={name} component={InputArray} {...rest}>
    {
      (field) => <TextField name={field} validate={validate} {...rest} />
    }
  </FieldArray>
)

export const IngredientArray = ({ name, ...rest }) => (
  <FieldArray name={name} component={InputArray} {...rest}>
    {
      (field) => (
        <div className={style.ingredient}>
          <TextField name={`${field}.product`} validate={required} className={style.product} placeholder="name of product" />
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
        <div key={field} className={style.arrayItem}>
          <div />
          { children(field, i) }
          { (fields.length > 1) && <DeleteIcon size={10} color="#b0b0b0" onClick={() => fields.remove(i)} /> }
        </div>
      ))
    }
    <AddButton label={newItemLabel} size={9} width={110} onClick={() => fields.push()} />
  </div>
)
