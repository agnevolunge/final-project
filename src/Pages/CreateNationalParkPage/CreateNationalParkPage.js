import React, { useState } from 'react'
import Container from '../../Components/Container/Container'
import { SERVER } from '../../config'
import styles from "./CreateNationalParkPage.module.css"

const CreateNationalParkPage = () => {

    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [parkAttractions, setParkAttractions] = useState([]);

    const [titleError, setTitleError] = useState("")
    const [bodyError, setBodyError] = useState("")
    const [invalidForm, setInvalidForm] = useState(false);

   
    const titleHandler = event => setTitle(event.target.value)
    const bodyHandler = event => setBody(event.target.value)

    const parkAttractionsInputHandler = (event) => {
        const enteredValue = event.target.value;
        if (!enteredValue) {
          setParkAttractions([]);
          return;
        }
        const parkAttractionsArr = enteredValue.split(",");
        const updatedParkAttractionsArr = parkAttractionsArr.map(
          (location) => {
            const trimmedLocation = location.trim();
            const updatedLocation =
              trimmedLocation.length > 0
                ? trimmedLocation.charAt(0).toUpperCase() + trimmedLocation.slice(1)
                : "";
            return updatedLocation;
          }
        );
        setParkAttractions(updatedParkAttractionsArr);
      };

      const newParkHandler = event => {
        event.preventDefault()

        const newPark = {
            title,
            body,
            attractions: parkAttractions,
        }
        fetch(`${SERVER}/nationalParks`, {
            method: 'POST', 
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
            body: JSON.stringify(newPark)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
        })

        setTitleError("");
        setBodyError("");
        setInvalidForm(false);
    
        let formIsValid = true;
    
        if (!title) {
          setTitleError("Title is required");
          formIsValid = false;
        } else if (title.length < 5) {
          setTitleError("Title must be at least 5 characters long");
          formIsValid = false;
        }

        if (!body) {
            setBodyError("Description is required");
            formIsValid = false;
          } else if (body.length < 10) {
            setBodyError("Description must be at least 3 characters long");
            formIsValid = false;
          }

        if (!formIsValid) {
            setInvalidForm(true);
            return;
          }
    }

  return (
    <Container>
        <h1>Create new National Park</h1>

        <form id={styles.parkForm} onSubmit={newParkHandler}>
            <div className={styles.formControl}>
                <label htmlFor="title">National Park Title:</label>
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
              <label htmlFor="body">National Park Description:</label>
                <textarea 
                  rows={5}
                  name="body" 
                  id="body"
                  value={body}
                  onChange={bodyHandler}
                />
                <span className={styles.bodyErrorMessage}>{bodyError}</span>
            </div>

            <div className={styles.formControl}>
              <label htmlFor="attractions">National Park Attractions:</label>
               <textarea
                 rows={5}
                 id="attractions"
                 name="attractions"
                 value={parkAttractions.join(", ")}
                 onChange={parkAttractionsInputHandler}
               />
            </div>

            <button className={styles.createParkBtn} type="submit">Create National Park</button> 

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

export default CreateNationalParkPage