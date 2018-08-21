import React from 'react'
import PropTypes from 'prop-types'
import { Field, FieldArray } from 'redux-form'

import TextInput from '../TextInput/TextInput'
import InputArray from '../InputArray/InputArray'

import { required } from '../../utils/validation'

import style from './Field.scss'

export const TextField = ({ name, ...rest }) => (
  <Field name={name} component={TextInput} {...rest} />
)

TextField.propTypes = {
  name: PropTypes.string.isRequired
}

export const TextFieldArray = ({ name, validate, ...rest }) => (
  <FieldArray name={name} component={InputArray} {...rest}>
    {
      (field) => <TextField name={field} validate={validate} {...rest} />
    }
  </FieldArray>
)

TextFieldArray.propTypes = {
  name: PropTypes.string.isRequired,
  validate: PropTypes.func
}

export const IngredientFieldArray = ({ name, ...rest }) => (
  <FieldArray name={name} component={InputArray} {...rest}>
    {
      (field) => (
        <div className={style.ingredient}>
          <TextField
            name={`${field}.product`}
            validate={required}
            className={style.product}
            placeholder="name of product"
          />
          <TextField name={`${field}.amount`} className={style.amount} placeholder="amount / unit" />
        </div>
      )
    }
  </FieldArray>
)

IngredientFieldArray.propTypes = {
  name: PropTypes.string.isRequired,
  validate: PropTypes.func
}