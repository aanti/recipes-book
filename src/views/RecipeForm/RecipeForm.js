import React from 'react'
import { reduxForm } from 'redux-form'

import { TextInput, TextField, TextFieldArray, IngredientArray } from '../../components/Field/TextField/TextField'
import { AddButton } from '../../components/Button'

import style from './RecipeForm.scss'

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
      <IngredientArray name="ingredient" />
    </Section>
    <Section title="Recipe">
      <TextFieldArray name="step" placeholder="what should I do?" />
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
