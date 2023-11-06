import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { SERVER } from '../../config'
import Container from '../../Components/Container/Container'

const NationalParkPage = () => {

    const { id } = useParams()

    const [nationalPark, setNationalPark] = useState(null)
    const [parkDeleted, setParkDeleted] = useState(false)

    useEffect(() => {
        async function fetchNationalPark() {
            const res = await fetch(`${SERVER}/nationalParks/${id}?_embed=albums`)
            const nationalParkData = await res.json()

            setNationalPark(nationalParkData)
            console.log(nationalParkData)
        }
        fetchNationalPark()
    }, [id])

    if (!nationalPark) {
        return ''
    }

    const removeParkHandler = () => {
        fetch(`${SERVER}/nationalParks/${id}`, {
          method: 'DELETE',
        }) 
        setParkDeleted(true)
      }

  return (
    <Container>
        {parkDeleted ? (
          <>
            <p> Park was deleted </p>
            <Link to="/nationalParks">Go back to National Parks List</Link>
          </>
        ) : (
          <>
            <div className="park-wrapper">
              <img src={nationalPark.photoUrl} alt="" key={id}></img>
              <h1>{nationalPark.title}</h1>
              <p>{nationalPark.body}</p>
            </div>
        
        <Link to={'/nationalParks'}>Go back to National Parks List</Link>
        
        <div className="delete-button">
            <button onClick={removeParkHandler}>Delete National Park</button>
        </div>
       
          </>
        )}
    </Container>
   )
}

export default NationalParkPage