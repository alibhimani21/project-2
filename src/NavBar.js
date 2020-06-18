import React, { useState } from 'react'
import { Link, withRouter } from 'react-router-dom'
import Logo from './images/muzaic.png'

const NavBar = (props) => {
  const [text, setText] = useState('')
  // const [fetchedData, updateFetchedData] = useState([])
  const search = `https://cors-anywhere.herokuapp.com/https://api.deezer.com/search/artist?q=${text}`
  // console.log(fetchedData)


  function getFetch(event) {
    event.preventDefault()
    fetch(search)
      .then(resp => resp.json())
      .then(data => {
        // updateFetchedData(data.data)
        console.log(props)
        if (props.location.pathname === '/results') {
          props.history.push({
            pathname: '/resultz',
            state: { data }
          })

        } else {
          props.history.push({
            pathname: '/results',
            state: { data }
          })

        }
        setText('')
      })

  }

  return <div className="navbar">

    <Link to="/" >
      <img
        src={Logo}
        alt="muzaic"
        className="navlogo"
      />
    </Link>




    <div className="search">
      <form
        onSubmit={getFetch}
      >
        <input
          className="searchinput"
          type="text"
          placeholder="Search for artists..."
          onChange={(event) => setText(event.target.value)}
          value={text}
        />

        <button
          onClick={getFetch}
          className="searchbtn" >


          Search
        </button>
      </form>







    </div>
  </div>

}

export default withRouter(NavBar)