import React from 'react'
import { Link } from "react-router-dom"
import styles from "./NationalParkItem.module.css"

const NationalParkItem = (props) => {
    const { id, title, body, photoUrl, attractions } = props.data
    
  
  let attractionsElement = ''

    const attractionsTitle = attractions.length === 1 ? `Main tourist attraction of ${title} is:` : `Main tourist attractions of ${title} are:`

    attractionsElement = (
        <div className={styles.attractionsWrapper}>
            <h4 className={styles.attractionsTitle}>{attractionsTitle}</h4>
            <ul>
                {attractions.map((location, index) => (
                    <li className={styles.attractionsItem} key={index}>{location}</li>
                ))}
            </ul>
        </div>
    )
  
    return (
        <figure className={styles.parkCard}> 
            <li className={styles.parkItem}>
                <img className={styles.parkImg} src={photoUrl} alt="" key={id}/>

                <div className={styles.parkCardContent}>
                    <Link className={styles.parkTitle} to={`/nationalParks/${id}`}>{title}</Link>

                    <p className={styles.parkDescription}>{body}</p>

                    <span className={styles.parkAttractions}>{attractionsElement}</span>
                </div>
               
            </li>
        </figure>
    
  )
}

export default NationalParkItem