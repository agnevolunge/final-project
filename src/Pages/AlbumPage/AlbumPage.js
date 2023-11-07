import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { SERVER } from '../../config'
import Container from '../../Components/Container/Container'
import styles from './AlbumPage.module.css'

const AlbumPage = () => {

    const { id } = useParams()

    const [album, setAlbum] = useState(null)
    const [albumDeleted, setAlbumDeleted] = useState(false)

    useEffect(() => {
        const fetchAlbum = async () => {
            const res = await fetch(`${SERVER}/albums/${id}?_embed=photos`)
            const albumData = await res.json()

            setAlbum(albumData)
            console.log(albumData)
        }
        fetchAlbum()
    }, [id])
    
    if (!album) {
        return (
          <Container>
            <h3>Loading...</h3>
          </Container>
        )
    }
    const removeAlbumHandler = () => {
      fetch(`${SERVER}/albums/${id}`, {
        method: 'DELETE',
      }) 
      setAlbumDeleted(true)
    }

    const { photos } = album

  return (
    <Container>
      {albumDeleted ? (
          <>
            <p> {album.title} was deleted </p>
            <Link to="/albums">Go back to National Parks Gallery</Link>
          </>
          ) : (
          <>
           <h1 className={styles.albumTitle}>{album.title}</h1>
        
            <div className={styles.imgList}>
              {photos.map((photo) => {
                return <img className={styles.albumImg} src={photo.url} alt={photo.title} key={photo.id} />
              })}
            </div>

            <div className={styles.buttonsWrapper}>
              <Link className={styles.goBackLink} to={'/albums'}>Go back to National Parks Gallery</Link>
              <button className={styles.deleteBtn} onClick={removeAlbumHandler}>Delete National Park Gallery</button>
            </div>
          </>
        )}
    </Container>
  )
}

export default AlbumPage