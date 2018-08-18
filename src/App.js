import React, { Component } from 'react'

import { connect } from 'react-redux'

import style from './App.scss'

import Modal from './components/Modal/Modal'
import RecipeList from './views/RecipeList/RecipeList'
import RecipeForm from './views/RecipeForm/RecipeForm'

import { closeModal,addRecipe } from './actions'

class App extends Component {
  handleModalClose = () => {
    this.props.dispatch(closeModal())
  }

  handleSubmit = (values) => {
    this.props.dispatch(addRecipe(values))
  }

  render() {
    const { ui, dispatch, initialValues } = this.props
    return (
      <div className={style.App}>
        <RecipeList />
        <Modal open={ui.modal.open}>
          <RecipeForm onSubmit={this.handleSubmit} onCancel={this.handleModalClose} initialValues={initialValues} />
        </Modal>
      </div>
    )
  }
}

const initialValuesSelector = state => {
  const { data, ui: { activeItemId } } = state
  if (!activeItemId) {
    return undefined
  }
  const index = data.findIndex(item => item.id === activeItemId)
  return (index !== -1) ? data[index] : undefined
}

const mapStateToProps = (state) => ({
  ui: state.ui,
  initialValues: initialValuesSelector(state)
})

export default connect(mapStateToProps)(App)
