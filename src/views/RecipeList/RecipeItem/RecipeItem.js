import React, { Component } from 'react'
import classnames from 'classnames'

import Section from '../../../components/Section/Section'

import style from './RecipeItem.scss'

class RecipeItem extends Component {
  innerRef = React.createRef()
  height = 0
  initial = true

  componentDidMount = () => {
    this.height = this.innerRef.current.clientHeight
    this.initial = false
    this.forceUpdate()
  }

  render () {
    const { name, id, description, ingredients = [{}], recipe = [], open, onClick, onDelete, onModify } = this.props
    return (
      <div
        className={classnames(style.container, open && style.expanded)}
        onClick={onClick}
        style={{ height: open && this.height + 50 }}
      >
        <div className={style.name}>{name}</div>
        <div className={style.description}>{description}</div>
        <div ref={this.innerRef} className={style.content}>
          {
            (this.initial || open) && (
              <React.Fragment>
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
                <div onClick={() => onModify(id)}>MODIFY RECIPE!</div>
                <div onClick={() => onDelete(id)}>DELETE RECIPE!</div>
              </React.Fragment>
            )
          }
        </div>
      </div>
    )
  }
}

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
