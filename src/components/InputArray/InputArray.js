import React from 'react'
import PropTypes from 'prop-types'

import { AddButton } from '../Button'
import { Delete as DeleteIcon } from '../Icon'

import style from './InputArray.scss'

export const InputArray = ({ children, fields = [], newItemLabel, ...props }) => (
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

InputArray.propTypes = {
  children: PropTypes.func.isRequired,
  fields: PropTypes.array,
  newItemLabel: PropTypes.string
}

export default InputArray
