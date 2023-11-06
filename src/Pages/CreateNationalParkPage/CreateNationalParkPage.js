import React, { useState } from 'react'
import Container from '../../Components/Container/Container'
import { SERVER } from '../../config'

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
            setBodyError("Body is required");
            formIsValid = false;
          } else if (body.length < 10) {
            setBodyError("Body must be at least 3 characters long");
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

        <form onSubmit={newParkHandler}>
            <div className="form-control">
                <label htmlFor="title">National Park Title</label>
                <input
                type="text"
                name="title"
                id="title"
                value={title}
                onChange={titleHandler}
                />
            </div>

            <div className="form-control">
              <label htmlFor="body">National Park Description </label>
                <textarea 
                  name="body" 
                  id="body"
                  value={body}
                  onChange={bodyHandler}
                />
            </div>

            <div className="form-control">
              <label htmlFor="attractions">National Park Attractions:</label>
               <textarea
                 id="attractions"
                 name="attractions"
                 value={parkAttractions.join(", ")}
                 onChange={parkAttractionsInputHandler}
               />
            </div>

            <button type="submit">Create</button> 

            {invalidForm && (
              <div className="error-wrapper">
               <span className="error-message">
                Not all required data has been entered.
              </span>
             </div>
        )}
        </form>

    </Container>
  )
}

export default CreateNationalParkPage