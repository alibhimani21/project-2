import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import { HashRouter, Switch, Route } from 'react-router-dom'
import { HomePage, HomeNavBar } from './HomePage'

import './styles/style.scss'
import 'bulma'

import NavBar from './NavBar'
import Results from './Results'

const App = () => {
  return <HashRouter>
    <NavBar />
    <Switch>
      <Route exact path="/" >
        <HomePage />
        <HomeNavBar />
      </Route>
      <Route exact path="/results" component={Results} />
      <Route exact path="/resultz" component={Results} />
    </Switch>
  </HashRouter>
}

export default App