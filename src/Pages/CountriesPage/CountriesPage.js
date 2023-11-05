import React, { useEffect, useState } from 'react'
import { SERVER } from '../../config'
import Container from '../../Components/Container/Container'
import CountriesList from '../../Components/CountriesList/CountriesList'

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
    <h1>Where to visit National Parks:</h1>
    <div className="countries-wrapper">
    
      <CountriesList countries={countries} />
    </div>
     
  </Container>
  )
}

export default CountriesPage