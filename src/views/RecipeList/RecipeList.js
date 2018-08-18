import React from 'react'
import { AddButton } from '../../components/Button'
import { connect } from 'react-redux'

import RecipeItem from './RecipeItem/RecipeItem'

import NoData from '../../components/NoData/NoData'

import style from './RecipeList.scss'

const RecipeList = ({ data, onDelete, onModify, onNewRecipeClick }) => (
  <div className={style.container}>
    <header>List of recipes</header>
      {
        (data.length)
          ?
            data.map((item) => (
              <RecipeItem
                key={item.id}
                {...item}
                onDelete={onDelete}
                onModify={onModify}
              />
            ))
          :
            <NoData />
      }
    <footer>
      <AddButton label="Add new recipe" onClick={onNewRecipeClick} />
    </footer>
  </div>
)

const mapStateToProps = ({ data }) => ({ data })

export default connect(mapStateToProps)(RecipeList)