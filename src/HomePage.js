import React, { useState } from 'react'


export const HomePage = () => {
  return <section className="hero is-fullheight-with-navbar is-light is-bold">
    <div className="hero-body">
      <div className="container has-text-centered">
        <h1 className="hometitle">
          Muzaic
        </h1>
        <h2 className="subtitle">
          Mix and Match Your Music
        </h2>
      </div>
    </div>
  </section>
}

export const HomeNavBar = (props) => {
  const [text, setText] = useState('')
  // const [fetchedData, updateFetchedData] = useState([])
  const search = `https://cors-anywhere.herokuapp.com/https://api.deezer.com/search/artist?q=${text}`
  // console.log(fetchedData)


  function getFetch() {
    fetch(search)
      .then(resp => resp.json())
      .then(data => {
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

  return <div className="home">

    {/* <img src={require('./images/muzaic.png')} /> */}


    <div className="homesearch">
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


    </div>
  </div>

}







