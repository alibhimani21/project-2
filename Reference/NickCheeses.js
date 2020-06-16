import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Cheeses = () => {
  const [cheesesData, updateCheesesData] = useState([])

  useEffect(() => {
    fetch('http://cheesebored.herokuapp.com/cheeses')
      .then(resp => resp.json())
      .then(data => {
        updateCheesesData(data)
        console.log(data)
      })
  }, [])

  // Its good to include stuff inside a section, then container.
  return <section className="section">
    <div className="container">
      <div className="columns is-multiline is-mobile">
        {cheesesData.map((cheese, index) => {
          console.log(cheese)
          return <div key={index} className="column is-one-third-desktop is-half-tablet is-half-mobile">
            {/* 1) We create a link that has the cheese ID in it for each cheese */}
            <Link to={`/cheeses/${cheese._id}`}>
              <div className="card">
                <div className="card-content">
                  <div className="media">
                    <div className="media-content">
                      <p className="title is-4">{cheese.name}</p>
                      <p className="subtitle is-6">{cheese.origin}</p>
                      <p className="subtitle is-6">{cheese.user.username}</p>
                    </div>
                  </div>
                </div>
                <div className="card-image">
                  <figure className="image is-4by3">
                    <img src={cheese.image} alt={cheese.name} />
                  </figure>
                </div>
              </div>
            </Link>
          </div>
        })}
      </div>
    </div>
  </section>
}

export default Cheeses