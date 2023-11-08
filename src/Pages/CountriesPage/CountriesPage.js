import React, { useEffect, useState } from 'react'
import { SERVER } from '../../config'
import Container from '../../Components/Container/Container'
import CountriesList from '../../Components/CountriesList/CountriesList'
import styles from './CountriesPage.module.css'
import { Link } from 'react-router-dom'

const CountriesPage = () => {

  const [countries, setCountries] = useState([])

    useEffect(() => {
        const fetchCountries = async () => {
            const res = await fetch(`${SERVER}/countries?_embed=nationalParks`)
            const countriesData = await res.json()
            setCountries(countriesData)
            console.log(countriesData)
        }
        fetchCountries()
    }, [])

   

  return (
    <Container>
    <Link className={styles.createCountryBtn} to="/createCountry">Create new Country</Link>
    <h1>Where to visit National Parks:</h1>
    <div className={styles.countriesWrapper}>
    
      <CountriesList countries={countries} />
    </div>
     
  </Container>
  )
}

export default CountriesPage