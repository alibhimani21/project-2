import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import { HashRouter, Switch, Route } from 'react-router-dom'
import { HomePage, HomeNavBar } from './HomePage'

import './styles/style.scss'
import 'bulma'

import NavBar from './NavBar'
import Results from './Results'
import Artist from './Artist'
import Album from './Album'

const App = () => {
  return <HashRouter>
    <NavBar />
    <Switch>
      <Route exact path="/" >
        <HomePage />
      </Route>
      <Route exact path="/results" component={Results} />
      <Route exact path="/resultz" component={Results} />
      <Route path="/artist/:id" component={Artist} />
      <Route path="/album/:id" component={Album} />

    </Switch>
  </HashRouter>
}

export default App