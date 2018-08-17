import React, { Component } from 'react'
import classnames from 'classnames'

import Section from '../../../components/Section/Section'

import style from './RecipeItem.scss'

const RecipeItem = ({ name, description, ingredients = [], recipe = [], open, onClick }) => (
  <div className={classnames(style.container, open && style.expanded)} onClick={onClick}>
    <div className={style.name}>{name}</div>
    <div className={style.description}>{description}</div>
    {
      open && (
        <div className={style.content}>
          <Section title="ingredients" titleColor="#fff">
            {
              ingredients.map(({ product, amount }) => (
                <div className={style.ingredient}>
                  <span>{product}</span>
                  <span>{amount}</span>
                </div>
              ))
            }
          </Section>
          <Section title="recipe" titleColor="#fff">
            {
              recipe.map((step) => (
                <div>
                  <span>{step}</span>
                </div>
              ))
            }
          </Section>
        </div>
      )
    }
  </div>
)

class Item extends Component {
  state = {
    open: false
  }

  handleClick = () => {
    this.setState(({ open }) => ({ open: !open }))
  }

  render () {
    const { open } = this.state
    return <RecipeItem {...this.props} open={open} onClick={this.handleClick} />
  }
}

export default Item
