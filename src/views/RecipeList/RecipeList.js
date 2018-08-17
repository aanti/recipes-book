import React, { Component } from 'react'
import { AddButton } from '../../components/Button'
import { connect } from 'react-redux'

import RecipeItem from './RecipeItem/RecipeItem'

import { openModal } from '../../actions'

import style from './RecipeList.scss'

class RecipeList extends Component {
  render () {
    const { dispatch, data } = this.props
    return (
      <div className={style.container}>
        <header>List of recipes</header>
        {
          data.map(({ id, ...item }) => (
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

const mapStateToProps = ({ data }) => ({ data })

export default connect(mapStateToProps)(RecipeList)