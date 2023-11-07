import React from 'react'
import { Link } from 'react-router-dom'
import styles from './CountryItem.module.css'

const CountryItem = (props) => {
    const { id, continent, name, topNationalParks } = props.data

    let topNationalParksElement = ''

    const topNationalParksTitle = topNationalParks.length === 0 ? `There are no National Parks in ${name}:` : `Top National Parks in ${name} are:`

    topNationalParksElement = (
        <div className={styles.topParksWrapper}>
            <h3 className={styles.topParkTitle}>{topNationalParksTitle}</h3>
            <ul className={styles.topParksList}>
                {topNationalParks.map((location, index) => (
                    <li className={styles.topParkItem} key={index}>{location}</li>
                ))}
            </ul>
        </div>
    )

  return (
    <div className={styles.countryCard}>
        <Link className={styles.countryItem} to={`/countries/${id}`}>{name} ({continent})</Link> 
        
        {topNationalParksElement}
    </div>
  )
}

export default CountryItem