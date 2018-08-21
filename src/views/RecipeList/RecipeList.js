import React from 'react'
import PropTypes from 'prop-types'
import { AddButton } from '../../components/Button'
import { connect } from 'react-redux'

import NoData from '../../components/NoData/NoData'
import RecipeItem from './RecipeItem/RecipeItem'

import { modifyRecipe, openConfirmationDialog, openModal } from '../../actions'

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

RecipeList.propTypes = {
  data: PropTypes.array,
  onDelete: PropTypes.func.isRequired,
  onModify: PropTypes.func.isRequired,
  onNewRecipeClick: PropTypes.func.isRequired
}

const mapStateToProps = state => {
  const { data } = state
  return { data }
}

const mapDispatchToProps = dispatch => ({
  onDelete: (id) => dispatch(openConfirmationDialog(id)),
  onModify: (id) => dispatch(modifyRecipe(id)),
  onNewRecipeClick: () => dispatch(openModal())
})

export default connect(mapStateToProps, mapDispatchToProps)(RecipeList)