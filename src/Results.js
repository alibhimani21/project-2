import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Results = (props) => {
  const fetchedData = props.location.state
  console.log(fetchedData)

  if (!fetchedData) {
    return <div>
      <h1>Sorry we didn't get that. Type something to search</h1>
      <img src={'./images/muzaic.png'} alt="muzaic" />
    </div>
  } else {
    return <div>
      <section className="section">
        <div className="container">
          <div className="columns is-multiline is-mobile">
            {fetchedData.data.data.map((artist, index) => {
              return <div key={index} className="column is-one-third-desktop is-half-tablet is-half-mobile">
                <div className="card">
                  <div className="card-content">
                    <div className="media">
                      <div className="media-content">
                        <p className="title is-2">{artist.name}</p>
                      </div>
                    </div>
                  </div>
                  <div className="card-image">
                    <figure className="image is-1-1">
                      <img src={artist.picture_xl} alt={artist.name} />
                    </figure>
                  </div>
                </div>
              </div>
            })}
          </div>
        </div>
      </section>

    </div >

  }


}

export default Results