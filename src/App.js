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
    this.handleModalClose()
  }

  render() {
    const { ui, dispatch } = this.props
    return (
      <div className={style.App}>
        <RecipeList />
        <Modal open={ui.modal.open}>
          <RecipeForm onSubmit={this.handleSubmit} onCancel={this.handleModalClose} />
        </Modal>
      </div>
    )
  }
}

const mapStateToProps = ({ ui }) => ({ ui })

export default connect(mapStateToProps)(App)
