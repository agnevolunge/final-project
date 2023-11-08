import React, { useState } from 'react'
import Container from '../../Components/Container/Container'
import styles from './CreateCountryPage.module.css'
import { SERVER } from '../../config'

const CreateCountryPage = () => {
    const [title, setTitle] = useState('')
    const [continent, setContinent] = useState('')
    const [topParks, setTopParks] = useState([]);

    const [titleError, setTitleError] = useState("")
    const [continentError, setContinentError] = useState("")
    const [invalidForm, setInvalidForm] = useState(false);

   
    const titleHandler = event => setTitle(event.target.value)
    const continentHandler = event => setContinent(event.target.value)

    const topParksInputHandler = (event) => {
        const enteredValue = event.target.value;
        if (!enteredValue) {
          setTopParks([]);
          return;
        }
        const topParksArr = enteredValue.split(",");
        const updatedTopParksArr = topParksArr.map(
          (location) => {
            const trimmedLocation = location.trim();
            const updatedLocation =
              trimmedLocation.length > 0
                ? trimmedLocation.charAt(0).toUpperCase() + trimmedLocation.slice(1)
                : "";
            return updatedLocation;
          }
        );
        setTopParks(updatedTopParksArr);
      };

      const newCountryHandler = event => {
        event.preventDefault()

        const newCountry = {
            title,
            continent,
            topParks: topParks,
        }
        fetch(`${SERVER}/countries`, {
            method: 'POST', 
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
            body: JSON.stringify(newCountry)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
        })

        setTitleError("");
        setContinentError("");
        setInvalidForm(false);
    
        let formIsValid = true;
    
        if (!title) {
          setTitleError("Title is required");
          formIsValid = false;
        } else if (title.length < 3) {
          setTitleError("Title must be at least 3 characters long");
          formIsValid = false;
        }

        if (!continent) {
            setContinentError("Description is required");
            formIsValid = false;
          } else if (continent.length < 3) {
            setContinentError("Continent must be at least 3 characters long");
            formIsValid = false;
          }

        if (!formIsValid) {
            setInvalidForm(true);
            return;
          }
    }

  return (
    <Container>
        <h1>Create new Country with National Park List</h1>

        <form id={styles.countryForm} onSubmit={newCountryHandler}>
            <div className={styles.formControl}>
                <label htmlFor="title">Country Title:</label>
                <input
                type="text"
                name="title"
                id="title"
                value={title}
                onChange={titleHandler}
                />
                <span className={styles.titleErrorMessage}>{titleError}</span>
            </div>
            
            <div className={styles.formControl}>
                <label htmlFor="continent">Country Continent:</label>
                <input
                type="text"
                name="continent"
                id="continent"
                value={continent}
                onChange={continentHandler}
                />
                <span className={styles.continentErrorMessage}>{continentError}</span>
            </div>

            <div className={styles.formControl}>
              <label htmlFor="topParks">Top National Parks:</label>
               <textarea
                 rows={5}
                 id="topParks"
                 name="topParks"
                 value={topParks.join(", ")}
                 onChange={topParksInputHandler}
               />
            </div>

            <button className={styles.createCountryBtn} type="submit">Create Country</button> 

            {invalidForm && (
              <div className={styles.errorWrapper}>
               <span className={styles.errorMessage}>
                Not all required data has been entered.
               </span>
              </div>
            )}
        </form>
    </Container>
  )
}

export default CreateCountryPage