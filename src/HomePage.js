import React, { useState } from 'react'


export const HomePage = () => {
  return <div className="homepage">
    <figure className="albums">
      <img src={'./images/home3.png'} alt="album covers" />
    </figure>
  </div>
}

// export const HomeNavBar = (props) => {
//   const [text, setText] = useState('')
//   // const [fetchedData, updateFetchedData] = useState([])
//   const search = `https://cors-anywhere.herokuapp.com/https://api.deezer.com/search/artist?q=${text}`
//   // console.log(fetchedData)


//   function getFetch() {
//     fetch(search)
//       .then(resp => resp.json())
//       .then(data => {
//         console.log(props)
//         if (props.location.pathname === '/results') {
//           props.history.push({
//             pathname: '/resultz',
//             state: { data }
//           })

//         } else {
//           props.history.push({
//             pathname: '/results',
//             state: { data }
//           })

//         }
//       })

//   }

//   return <div className="home">

//     <div className="homesearch">
//       <input
//         className="homesearchinput"
//         type="text"
//         placeholder="Search for artists..."
//         onChange={(event) => setText(event.target.value)}
//         value={text}
//       />

//       <button
//         onClick={getFetch}
//         className="homesearchbtn" >


//         Search
//       </button>


//     </div>
//   </div>

// }







