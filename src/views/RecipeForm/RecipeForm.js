import React from 'react'
import { reduxForm } from 'redux-form'

import { TextInput, TextField, TextFieldArray, IngredientArray } from '../../components/Field/TextField/TextField'
import { AddButton, BasicButton } from '../../components/Button'
import Section from '../../components/Section/Section'

import style from './RecipeForm.scss'

const RecipeForm = ({ handleSubmit, onCancel }) => (
  <div className={style.container}>
    <Section title="General">
      <TextField name="name" placeholder="name" />
      <TextField name="description" placeholder="description" />
    </Section>
    <Section title="Ingredients">
      <IngredientArray name="ingredients" newItemLabel="add ingredient" />
    </Section>
    <Section title="Recipe">
      <TextFieldArray name="recipe" newItemLabel="add step" placeholder="what should I do?" />
    </Section>
    <footer>
      <BasicButton label="save" onClick={handleSubmit} />
      <BasicButton label="cancel" onClick={onCancel} />
    </footer>
  </div>
)

export default reduxForm({
  form: 'createNewRecipe',
  initialValues: {
    recipe: [''],
    ingredients: [{ product: '', amount: '' }]
  }
})(RecipeForm)
