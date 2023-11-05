import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { SERVER } from '../../config'
import Container from '../../Components/Container/Container'

const NationalParkPage = () => {

    const { id } = useParams()

    const [nationalPark, setNationalPark] = useState(null)

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


  return (
    <Container>
        <div className="park-wrapper">
            <img src={nationalPark.photoUrl} alt="" key={id}></img>
            <h1>{nationalPark.title}</h1>
            <p>{nationalPark.body}</p>
        </div>
        <Link to={'/nationalParks'}>Go back to National Parks List</Link>
    </Container>
    
  )
}

export default NationalParkPage