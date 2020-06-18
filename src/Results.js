import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import LargeLogo from './src/images/muzaic.png'

const Results = (props) => {
  const fetchedData = props.location.state
  console.log(fetchedData)

  if (!fetchedData) {
    return <div className="error">
      <h1>Sorry we didn't get that, use the search bar to find artists!</h1>
      <img className="albums" src={LargeLogo} alt="muzaic" />
    </div>
  } else {
    return <div>
      <section className="section">
        <div className="container">
          <h2 className="title is-2">Artists</h2>
          <div className="columns is-mobile">
            {fetchedData.data.data.map((artist, index) => {
              return <div key={index} className="column is-one-quarter-desktop is-half-tablet is-half-mobile">
                <Link to={`/artist/${artist.id}`}>
                  <div className="card-image">
                    <figure className="image is-1-1">
                      <img src={artist.picture_xl} alt={artist.name} />
                    </figure>
                  </div>

                  <div className="card has-text-centered">
                    <div className="card-content">
                      <div className="media">
                        <div className="media-content">
                          <p className="title is-4">{artist.name}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            })}
          </div>
        </div>
      </section>

    </div >

  }


}

export default Results