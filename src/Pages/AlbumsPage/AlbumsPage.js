import React, { useEffect, useState } from 'react'
import Container from '../../Components/Container/Container'
import { SERVER } from '../../config'
import { Link } from 'react-router-dom'

const AlbumsPage = () => {

  const [albums, setAlbums] = useState([])

  useEffect(() => {
    const fetchAlbums = async () => {
        const res = await fetch(`${SERVER}/albums?_embed=photos`)
        const albumsData = await res.json()
        setAlbums(albumsData)
        console.log(albumsData)
    }
    fetchAlbums()
}, [])

  if (albums.length === 0) {
    return (
      <Container>
        <h1> Loading ...</h1>
      </Container>
    )
  }

  return (
    <Container>
      <h1>Albums Page</h1>
        <div className="albums-wrapper">
        <ul className="albums-list">
          {albums.map((album) => (
            <li key={albums.id} className="albums-item">
             <Link to={`/albums/${album.id}`} className='album-link'>{album.title} (Go to National Park Gallery)</Link>  
              <div className="random-image">
               <Link to={`/albums/${album.id}`}>
                <img src={album.photos[0].url} alt="" key={album.id} />
               </Link>
              </div>
             
            </li>
          ))}
        </ul>

        </div>
    </Container>
    
  )
}

export default AlbumsPage