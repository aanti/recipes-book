import React, { Component } from 'react'
import { AddButton } from '../../components/Button'

import RecipeItem from './RecipeItem/RecipeItem'

import { list as recipes } from '../../mock'

import style from './RecipeList.scss'

class RecipeList extends Component {
  render () {
    return (
      <div className={style.container}>
        <header>List of recipes</header>
        {
          recipes.map(({ id, ...item }) => (
            <RecipeItem key={id} {...item} />
          ))
        }
      </div>
    )
  }
}

export default RecipeList