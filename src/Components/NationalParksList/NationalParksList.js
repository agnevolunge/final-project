import React from 'react'
import NationalParkItem from '../NationalParkItem/NationalParkItem'

const NationalParksList = ( {nationalParks} ) => {

    let nationalParksElement = <p>No National Parks found</p>

    if (nationalParks.length > 0) {
      nationalParksElement = (
        <ul className="parks-list">
            {nationalParks.map((nationalPark) => <NationalParkItem key={nationalPark.id} data={nationalPark}/>)}
        </ul>
      )
    }

  return (
    <div>
        {nationalParksElement}
    </div>
  )
}

export default NationalParksList