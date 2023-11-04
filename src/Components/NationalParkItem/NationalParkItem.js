import React from 'react'
import { Link } from "react-router-dom"

const NationalParkItem = (props) => {
    const { id, title, body, photoUrl, attractions } = props.data
    console.log(title, body, photoUrl, attractions)
  
  let attractionsElement = ''

    const attractionsTitle = attractions.length === 1 ? `Main tourist attraction of ${title} is:` : `Main tourist attractions of ${title} are:`

    attractionsElement = (
        <div className="attractions-wrapper">
            <h2>{attractionsTitle}</h2>
            <ul>
                {attractions.map((location, index) => (
                    <li key={index}>{location}</li>
                ))}
            </ul>
        </div>
    )
  
    return (
     <li className="park-item">
        <Link className="park-title" to={`/nationalParks/1`}>{title}</Link>
        <p className="park-description">{body}</p>
        <img src={photoUrl} alt="" key={id}/>
        <span>{attractionsElement}</span>
      
     </li>
  )
}

export default NationalParkItem