import React from 'react'
import CountryItem from '../CountryItem/CountryItem'
import styles from './CountriesList.module.css'

const CountriesList = ({ countries }) => {

    let countriesElement = <p>No Countries found</p>

    if (countries.length > 0) {
      countriesElement = (
        <ul className={styles.countriesList}>
            {countries.map((country) => <CountryItem key={country.id} data={country}/>)}
        </ul>
      )
    }
  return (
    <div className={styles.countryCard}>
    {countriesElement}
    </div>
  )
}

export default CountriesList