import React, { useEffect, useState } from 'react'
import Container from '../../Components/Container/Container'
import { SERVER } from '../../config'
import { Link } from 'react-router-dom'
import styles from './AlbumsPage.module.css'

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
        <div className={styles.albumsWrapper}>
          <ul className={styles.albumsList}>
            {albums.map((album) => (
              <li key={albums.id} className={styles.albumsItem}>
                <Link className={styles.albumTitle} to={`/albums/${album.id}`}>{album.title}</Link>  
                
                <div className={styles.randomImage}>
                  <Link to={`/albums/${album.id}`}>
                    <img className={styles.albumCoverImg} src={album.photos[0].url} alt="" key={album.id} />
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