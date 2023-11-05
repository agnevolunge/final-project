import React from 'react'
import CountryItem from '../CountryItem/CountryItem'

const CountriesList = ({ countries }) => {

    let countriesElement = <p>No Countries found</p>

    if (countries.length > 0) {
      countriesElement = (
        <ul className="countries-list">
            {countries.map((country) => <CountryItem key={country.id} data={country}/>)}
        </ul>
      )
    }
  return (
    <div>
    {countriesElement}
</div>
  )
}

export default CountriesList