import React, { useEffect, useState } from 'react'
import ReactAudioPlayer from 'react-audio-player'
import { Link } from 'react-router-dom'


const Artist = (props) => {
  const [artistData, updateArtistData] = useState({})
  const [albumsData, updateAlbumsData] = useState([])
  const [relatedArtistData, updateRelatedArtistData] = useState({ data: [] })
  const [topTracksData, updatetopTrackstData] = useState({ data: [] })


  useEffect(() => {
    const id = props.match.params.id
    fetch(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/${id}/`)
      .then(resp => resp.json())
      .then((data) => {
        updateArtistData(data)
        console.log(data)
      })
    fetch(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/${id}/albums`)
      .then(resp => resp.json())
      .then((data) => {
        const deDupedData = []
        const seen = {}
        data.data.forEach(album => {
          if (!seen.hasOwnProperty(album.title)) {
            deDupedData.push(album)
            seen[album.title] = true
          }
        })
        updateAlbumsData(deDupedData)
        console.log(deDupedData)
      })

    fetch(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/${id}/related`)
      .then(resp => resp.json())
      .then((data) => {
        updateRelatedArtistData(data)
        console.log(data)
      })

    fetch(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/${id}/top`)
      .then(resp => resp.json())
      .then((data) => {
        updatetopTrackstData(data)
        console.log(data)
      })
  }, [])

  return <div className="artist-page">

    <div className="artist-header">
      <div className="artist-data">
        <h1>{artistData.name}</h1>
        <img src={artistData.picture_medium} alt={artistData.name} />
      </div>

      <div className="top-tracks">


        {topTracksData.data.map((track, index) => {

          return <div key={index}>
            <h1>{track.title}</h1>
            <ReactAudioPlayer
              src={track.preview}
              controls
            />

          </div>
        })}

      </div>

    </div>


    <div className="albums-data">


      {albumsData.map((albums, index) => {
        return <div key={index} className="column is-one-fifth-desktop is-quarter-tablet is-half-mobile">
          <Link to={`/album/${albums.id}`}>
            <div className="card has-text-centered">
              <div className="card-content">
                <div className="media">
                  <div className="media-content">
                    <p className="title is-4">{albums.title}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-image">
              <figure className="image is-1-1">
                <img src={albums.cover_medium} />
              </figure>
            </div>
          </Link>
        </div>
      })}



    </div>


    <div className="related-artists">


      {relatedArtistData.data.map((related, index) => {
        return <div key={index} className="column is-one-fifth-desktop is-quarter-tablet is-half-mobile">
          <div className="card has-text-centered">
            <div className="card-content">
              <div className="media">
                <div className="media-content">
                  <p className="title is-4">{related.name}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="card-image">
            <figure className="image is-1-1">
              <img src={related.picture_medium} alt={related.name} />
            </figure>
          </div>
        </div>
      })}

    </div>





  </div>
}


export default Artist