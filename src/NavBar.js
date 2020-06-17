import React, { useState } from 'react'
import { Link, withRouter } from 'react-router-dom'
// import logo from './images/muzaic.png'

const NavBar = (props) => {
  const [text, setText] = useState('')
  // const [fetchedData, updateFetchedData] = useState([])
  const search = `https://cors-anywhere.herokuapp.com/https://api.deezer.com/search/artist?q=${text}`
  // console.log(fetchedData)


  function getFetch() {
    fetch(search)
      .then(resp => resp.json())
      .then(data => {
        // updateFetchedData(data.data)e
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
      })

  }

  return <div className="navbar">

    <img src={'./images/muzaic.png'} alt="muzaic" className="navlogo" />
    {/* <img src={require('./images/muzaic.png')} /> */}


    <div className="search">
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




      {/* <button onClick={getFetch} className="searchbtn">
      Search
    </button> */}

    </div>
  </div>

}

export default withRouter(NavBar)