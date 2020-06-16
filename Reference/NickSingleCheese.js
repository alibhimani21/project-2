import React, { useEffect, useState } from 'react'

const SingleCheese = (props) => {
  const [cheeseData, updateCheeseData] = useState({})

  useEffect(() => {
    const id = props.match.params.id
    fetch(`http://cheesebored.herokuapp.com/cheeses/${id}`)
      .then(resp => resp.json())
      .then((data) => {
        updateCheeseData(data)
      })
  }, [])

  return <div>
    <img src={cheeseData.image} alt={cheeseData.name}/>
    <h1>{cheeseData.name}</h1>
    <h2>{cheeseData.origin}</h2>
    <p>{cheeseData.tastingNotes}</p>
  </div>
}

export default SingleCheese