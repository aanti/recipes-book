import React, { Component } from 'react'

import { connect } from 'react-redux'

import style from './App.scss'

import Modal from './components/Modal/Modal'
import RecipeList from './views/RecipeList/RecipeList'

import { closeModal } from './actions'

class App extends Component {
  render() {
    const { ui, dispatch } = this.props
    console.log(ui)
    return (
      <div className={style.App}>
        <RecipeList />
        <Modal open={ui.modal.open} onOutsideClick={() => dispatch(closeModal())} />
      </div>
    )
  }
}

const mapStateToProps = ({ ui }) => ({ ui })

export default connect(mapStateToProps)(App)
