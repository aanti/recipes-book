import React, { Component } from 'react'

import Section from '../../../components/Section/Section'
import Collapsed from '../../../components/Collapsed/Collapsed'

import style from './RecipeItem.scss'

class RecipeItem extends Component {
  handleDelete = (e) => {
    const { id, onDelete } = this.props
    e.stopPropagation()
    onDelete(id)
  }

  handleModify = (e) => {
    const { id, onModify } = this.props
    e.stopPropagation()
    onModify(id)
  }

  render () {
    const { name, id, description, ingredients, recipe, open, onClick, onDelete, onModify } = this.props
    return (
      <Collapsed className={style.container}>
        <Collapsed.Header className={style.header}>
          <div className={style.name}>{name}</div>
          <div className={style.description}>{description}</div>
        </Collapsed.Header>
        <Collapsed.Content className={style.content}>
          <Section title="ingredients" titleColor="#fff">
            {
              ingredients.map(({ product, amount }, i) => (
                <div key={i} className={style.ingredient}>
                  <span>{product}</span>
                  <span>{amount}</span>
                </div>
              ))
            }
          </Section>
          <Section title="recipe" titleColor="#fff">
            {
              recipe.map((step, i) => (
                <div key={i}>
                  <span>{step}</span>
                </div>
              ))
            }
          </Section>
          <div onClick={this.handleModify}>MODIFY RECIPE!</div>
          <div onClick={this.handleDelete}>DELETE RECIPE!</div>
        </Collapsed.Content>
      </Collapsed>
    )
  }
}

export default RecipeItem
