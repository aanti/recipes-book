import React from 'react'
import { reduxForm } from 'redux-form'

import { TextInput, TextField, TextFieldArray } from '../../components/Field/TextField/TextField'
import { AddButton } from '../../components/Button'

import style from './RecipeForm.scss'

const Ingredient = (props) => (
  <div className={style.ingredient}>
    <div />
    <div className={style.item}>
      <TextField name="ingredient.product" className={style.product} placeholder="name of product" />
      <TextField name="ingredient.amount" className={style.amount} placeholder="amount / unit" />
    </div>
  </div>
)

const RecipeStep = props => (
  <div className={style.ingredient}>
    <div />
    <TextFieldArray name="step" placeholder="what should I do?" />
  </div>
)

const Section = ({ title, children }) => (
  <section className={style.section}>
    <span className={style.title}>{title}</span>
    <div className={style.content}>
      {children}
    </div>
  </section>
)

const RecipeForm = () => (
  <div>
    <Section title="General">
      <TextField name="name" placeholder="name" />
      <TextField name="description" placeholder="description" />
    </Section>
    <Section title="Ingredients">
      <Ingredient />
      <AddButton label="Add new ingredient" size={9} className={style.addButton} />
    </Section>
    <Section title="Recipe">
      <RecipeStep label="" />
    </Section>
  </div>
)

export default reduxForm({
  form: 'createNewRecipe',
  initialValues: {
    step: [''],
    ingredient: [{ product: '', amount: '' }]
  }
})(RecipeForm)
