import React, { useEffect, useState } from 'react'
import Container from '../../Components/Container/Container'
import { Link, useParams } from 'react-router-dom'
import { SERVER } from '../../config'

const CountryPage = () => {
    const { id } = useParams()

    const [country, setCountry] = useState(null)

    useEffect(() => {
        async function fetchCountry() {
            const res = await fetch(`${SERVER}/countries/${id}`)
            const countryData = await res.json()

            setCountry(countryData)
            console.log(countryData)
            console.log(countryData.countryMap)
        }
        fetchCountry()
    }, [id])

    if (!country) {
        return ''
    }

    const mapElement = country.countryMap
  
    return (
    <Container>
        <div className="map-wrapper">
          <iframe 
            title="country-map"
            src={mapElement} 
            width="600" 
            height="450" 
            style={{border:0}} 
            allowFullScreen="" 
            loading="lazy" 
            referrerpolicy="no-referrer-when-downgrade">
          </iframe>
          <div>
            <Link to={"/countries"}>Go back to Countries List</Link>
          </div>
        </div>
       
    </Container>
  )
}

export default CountryPage