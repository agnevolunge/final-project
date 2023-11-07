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
      <Link className={styles.createParkBtn} to="/createPark">Create new National Park</Link>
  
        <NationalParksList nationalParks={nationalParks} />
      
    </Container>
    
    
  )
}

export default NationalParksPage