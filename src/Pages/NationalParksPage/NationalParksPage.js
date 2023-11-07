import React, { useEffect, useState } from 'react'
import Container from '../../Components/Container/Container'
import { SERVER } from '../../config'
import NationalParksList from '../../Components/NationalParksList/NationalParksList'
import { Link } from 'react-router-dom'
import  styles from "./NationalParksPage.module.css"


const NationalParksPage = () => {

    const [nationalParks, setNationalParks] = useState([])

    useEffect(() => {
        const fetchNationalParks = async () => {
            const res = await fetch(`${SERVER}/nationalParks?_embed=albums&_embed=countries`)
            const nationalParks = await res.json()
            setNationalParks(nationalParks)
        }
        fetchNationalParks()
    }, [])

  

return (
    <Container>
      <Link to="/createPark">Create new National Park</Link>
      <h1>National Parks:</h1>
      <div className={styles.parksWrapper}>
      
        <NationalParksList nationalParks={nationalParks} />
      
      </div>
       
    </Container>
    
    
  )
}

export default NationalParksPage