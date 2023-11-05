import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { SERVER } from '../../config'
import Container from '../../Components/Container/Container'

const AlbumPage = () => {

    const { id } = useParams()

    const [album, setAlbum] = useState(null)

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

    const { photos } = album


  return (
    <Container>
        <h1>{album.title}</h1>
        
        <div className="photos-list">
            {photos.map((photo) => {
                return <img src={photo.url} alt={photo.title} key={photo.id} />
            })}
        </div>

        <Link to={'/albums'}>Go back to National Parks Gallery</Link>
    </Container>
  )
}

export default AlbumPage