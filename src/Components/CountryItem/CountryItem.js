import React from 'react'
import { Link } from 'react-router-dom'

const CountryItem = (props) => {
    const { id, continent, name, nationalParks, topNationalParks } = props.data

    let topNationalParksElement = ''

    const topNationalParksTitle = topNationalParks.length === 0 ? `There are no National Parks in ${name}:` : `Top National Parks in ${name} are:`

    topNationalParksElement = (
        <div className="top-parks-wrapper">
            <h3>{topNationalParksTitle}</h3>
            <ul>
                {topNationalParks.map((location, index) => (
                    <li key={index}>{location}</li>
                ))}
            </ul>

        </div>
    )

  return (
    <>
       <Link className="country-item" to={`/countries/${id}`}>{name}</Link> ({continent})
        <li className="top-park-item">
            <span>{topNationalParksElement}</span>
  
    </li>
    </>
 
  )
}

export default CountryItem