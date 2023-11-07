import React from 'react'
import NationalParkItem from '../NationalParkItem/NationalParkItem'
import styles from "./NationalParksList.module.css"

const NationalParksList = ( {nationalParks} ) => {

    let nationalParksElement = <p>No National Parks found</p>

    if (nationalParks.length > 0) {
      nationalParksElement = (
          <ul className={styles.parksList}>
              {nationalParks.map((nationalPark) => <NationalParkItem key={nationalPark.id} data={nationalPark}/>)}
          </ul>
        
      )
    }

  return (
    <div className={styles.parksWrapper}>
        {nationalParksElement}
    </div>
  )
}

export default NationalParksList