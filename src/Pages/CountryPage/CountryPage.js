import React, { useEffect, useState } from 'react'
import Container from '../../Components/Container/Container'
import { Link, useParams } from 'react-router-dom'
import { SERVER } from '../../config'
import styles from './CountryPage.module.css'

const CountryPage = () => {
    const { id } = useParams()

    const [country, setCountry] = useState(null)
    const [countryDeleted, setCountryDeleted] = useState(false)

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

    const removeCountryHandler = () => {
      fetch(`${SERVER}/countries/${id}`, {
        method: 'DELETE',
      }) 
      setCountryDeleted(true)
    }

    const mapElement = country.countryMap
  
    return (
    <Container>
      {countryDeleted ? (
          <>
            <p> Country was deleted </p>
            <Link to="/countries">Go back to National Parks List</Link>
          </>
        ) : (
        <>
          <div className={styles.mapWrapper}>
            <iframe 
              className={styles.mapItem}
              title="country-map"
              src={mapElement} 
              width="600" 
              height="450" 
              style={{border:0}} 
              allowFullScreen="" 
              loading="lazy" 
              referrerpolicy="no-referrer-when-downgrade">
            </iframe>
          </div>
            <div className={styles.buttonsWrapper}>
              <Link className={styles.goBackLink} to={"/countries"}>Go back to Countries List</Link>
              <button className={styles.deleteBtn} onClick={removeCountryHandler}>Delete National Park</button>
            </div>
          </>
        )}
    </Container>
  )
}

export default CountryPage