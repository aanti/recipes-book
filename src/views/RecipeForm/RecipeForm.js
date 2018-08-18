import React from 'react'
import { reduxForm } from 'redux-form'

import { TextField, TextFieldArray, IngredientArray } from '../../components/Field/TextField/TextField'
import { BasicButton } from '../../components/Button'
import Section from '../../components/Section/Section'

import { required, atLeastOne } from '../../utils/validation'

import style from './RecipeForm.scss'

const recipeValidate = atLeastOne('recipe')

const RecipeForm = ({ handleSubmit, onCancel }) => (
  <div className={style.container}>
    <Section title="General">
      <TextField name="name" placeholder="name" validate={required} />
      <TextField name="description" placeholder="description" />
    </Section>
    <Section title="Ingredients">
      <IngredientArray name="ingredients" newItemLabel="add item" />
    </Section>
    <Section title="Recipe">
      <TextFieldArray name="recipe" newItemLabel="add step" placeholder="what should I do?" validate={recipeValidate} />
    </Section>
    <footer>
      <BasicButton label="save" onClick={handleSubmit} />
      <BasicButton label="cancel" onClick={onCancel} />
    </footer>
  </div>
)

export default reduxForm({
  form: 'createNewRecipe',
  touchOnBlur: true,
  touchOnChange: true,
  initialValues: {
    recipe: [''],
    ingredients: [{ product: '', amount: '' }]
  }
})(RecipeForm)
