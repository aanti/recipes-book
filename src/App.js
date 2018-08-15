import React, { Component } from 'react'
import style from './App.scss'

import RecipeList from './views/RecipeList/RecipeList'

class App extends Component {
  render() {
    return (
      <div className={style.App}>
        <RecipeList />
      </div>
    )
  }
}

export default App
