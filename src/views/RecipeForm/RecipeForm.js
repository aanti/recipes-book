import React from 'react'

import { TextInput } from '../../components/Field/TextField/TextField'
import { AddButton } from '../../components/Button'

import style from './RecipeForm.scss'

const Ingredient = (props) => (
  <div className={style.ingredient}>
    <div />
    <div className={style.item}>
      <TextInput className={style.product} placeholder="name of product" />
      <TextInput className={style.amount} placeholder="amount / unit" />
    </div>
  </div>
)

const RecipeStep = props => (
  <div className={style.ingredient}>
    <div />
    <TextInput {...props} placeholder="what should I do?" />
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
      <TextInput placeholder="name" />
      <TextInput placeholder="description" />
    </Section>
    <Section title="Ingredients">
      <Ingredient />
      <Ingredient />
      <AddButton label="Add new ingredient" size={9} className={style.addButton} />
    </Section>
    <Section title="Recipe">
      <RecipeStep label="" />
      <RecipeStep label="" />
      <RecipeStep label="" />
      <AddButton label="Add new step" size={9} width={110} />
    </Section>
  </div>
)

export default RecipeForm
