import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import RecipeList from './views/RecipeList/RecipeList'
import RecipeCreate from './views/RecipeCreate/RecipeCreate'
import ConfirmationDialog from './views/ConfirmationDialog/ConfirmationDialog'

import style from './App.scss'

const App = ({ initialValues, name }) => (
  <div className={style.container}>
    <RecipeList />
    <RecipeCreate initialValues={initialValues} />
    <ConfirmationDialog name={name} />
  </div>
)

App.propTypes = {
  name: PropTypes.string,
  initialValues: PropTypes.object
}

const initialValuesSelector = state => {
  const { data, ui: { activeItemId } } = state
  if (!activeItemId) {
    return undefined
  }
  const index = data.findIndex(item => item.id === activeItemId)
  return (index !== -1) ? data[index] : undefined
}

const mapStateToProps = (state) => {
  const initialValues = initialValuesSelector(state)
  const name = (initialValues || {}).name
  return { ui: state.ui, initialValues, name }
}

export default connect(mapStateToProps)(App)
