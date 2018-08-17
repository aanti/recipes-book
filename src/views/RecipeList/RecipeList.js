import React, { Component } from 'react'
import { AddButton } from '../../components/Button'
import { connect } from 'react-redux'

import RecipeItem from './RecipeItem/RecipeItem'

import { openModal, deleteRecipe } from '../../actions'

import NoData from '../../components/NoData/NoData'

import style from './RecipeList.scss'

class RecipeList extends Component {
  handleDelete = id => {
    const { dispatch } = this.props
    dispatch(deleteRecipe(id))
  }

  render () {
    const { dispatch, data } = this.props
    return (
      <div className={style.container}>
        <header>List of recipes</header>
        {
          data.length
            ?
              data.map(({ id, ...item }) => (
                <RecipeItem key={id} {...item} id={id} onDelete={this.handleDelete} />
              ))
            :
              <NoData />
        }
        <footer>
          <AddButton label="Add new recipe" onClick={() => { dispatch(openModal()) }} />
        </footer>
      </div>
    )
  }
}

const mapStateToProps = ({ data }) => ({ data })

export default connect(mapStateToProps)(RecipeList)