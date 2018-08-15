import React, { Component } from 'react'
import { AddButton } from '../../components/Button'
import { connect } from 'react-redux'

import RecipeItem from './RecipeItem/RecipeItem'

import { openModal } from '../../actions'
import { list as recipes } from '../../mock'

import style from './RecipeList.scss'

class RecipeList extends Component {
  render () {
    const { dispatch } = this.props
    return (
      <div className={style.container}>
        <header>List of recipes</header>
        {
          recipes.map(({ id, ...item }) => (
            <RecipeItem key={id} {...item} />
          ))
        }
        <footer>
          <AddButton label="Add new recipe" onClick={() => { dispatch(openModal()) }} />
        </footer>
      </div>
    )
  }
}

export default connect()(RecipeList)