import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import { HashRouter, Switch, Route } from 'react-router-dom'

import 'bulma'
import './styles/style.scss'

const App = () => {
  const [text, setText] = useState('')
  const [fetchedData, updateFetchedData] = useState([])
  const search = ('https://cors-anywhere.herokuapp.com/https://api.deezer.com/search/artist?q=' + `${text}`)

  function getFetch() {
    fetch(search)
      .then(resp => resp.json())
      .then(data => {
        updateFetchedData(data)
        console.log(data)
      })
  }

  return <div>
    <input
      type="text"
      onChange={(event) => setText(event.target.value)}
      value={text}
    />


    <button onClick={() =>
      getFetch()
    } >
      Search
    </button>

  </div >




}

// fetch ('deezer.com/search/artist?q=`${(target.value)}`')
export default App