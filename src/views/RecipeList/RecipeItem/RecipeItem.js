import React, { Component } from 'react'

import style from './RecipeItem.scss'

const RecipeItem = ({ name, description, open, onClick }) => (
  <div className={style.container} style={{ height: open ? 500 : 50 }} onClick={onClick}>
    <div className={style.name}>{name}</div>
    <div className={style.description}>{description}</div>
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
