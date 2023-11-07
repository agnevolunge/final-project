import React from 'react'
import { Link } from "react-router-dom"
import styles from "./NationalParkItem.module.css"

const NationalParkItem = (props) => {
    const { id, title, body, photoUrl, attractions } = props.data
    
  
  let attractionsElement = ''

    const attractionsTitle = attractions.length === 1 ? `Main tourist attraction of ${title} is:` : `Main tourist attractions of ${title} are:`

    attractionsElement = (
        <div className={styles.attractionsWrapper}>
            <h2>{attractionsTitle}</h2>
            <ul>
                {attractions.map((location, index) => (
                    <li key={index}>{location}</li>
                ))}
            </ul>
        </div>
    )
  
    return (
    // <div className={styles.parkItemWrapper}>
        <li className={styles.parkItem}>
            <Link className={styles.parkTitle} to={`/nationalParks/${id}`}>{title}</Link>
            <p className={styles.parkDescription}>{body}</p>
            <img src={photoUrl} alt="" key={id}/>
            <span>{attractionsElement}</span>
        </li>
    // </div>
    
  )
}

export default NationalParkItem