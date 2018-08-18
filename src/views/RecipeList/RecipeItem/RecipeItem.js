import React, { Component } from 'react'

import Section from '../../../components/Section/Section'
import Collapsed from '../../../components/Collapsed/Collapsed'
import { BasicButton } from '../../../components/Button'

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
      <Collapsed className={style.container} expandedClassName={style.expanded}>
        <Collapsed.Header className={style.header}>
          <div>
            <div className={style.name}>{name}</div>
            <div className={style.description}>{description}</div>
          </div>
        </Collapsed.Header>
        <Collapsed.Content className={style.content}>
          <Section className={style.section} title="ingredients" titleColor="#1fb4ff">
            {
              ingredients.map(({ product, amount }, i) => (
                <div key={i} className={style.ingredient}>
                  <span>{product}</span>
                  <span>{amount}</span>
                </div>
              ))
            }
          </Section>
          <Section className={style.section} title="recipe" titleColor="#1fb4ff">
            {
              recipe.map((step, i) => (
                <div className={style.recipe} key={i}>
                  <span>{i + 1}.</span>
                  <span>{step}</span>
                </div>
              ))
            }
          </Section>
          <div className={style.buttons}>
            <BasicButton label="modify" onClick={this.handleModify} />
            <BasicButton label="delete" onClick={this.handleDelete} />
          </div>
        </Collapsed.Content>
      </Collapsed>
    )
  }
}

export default RecipeItem
