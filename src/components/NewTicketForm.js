// Here is the create function to create and add a new ticket

import React, { useState } from "react";
import './css/NewTicketForm.css'

function NewTicketForm() {
  const [image, setImage] = useState("");
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const [date, setDate] = useState("");
  const [capacity, setCapacity] = useState("");
  

  const handleSubmit = (event) => {
    event.preventDefault();

    const newTicket = {
      image,
      title,
      location,
      date,
      capacity,
     
    };

    fetch("http://localhost:4300/tickets", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTicket),
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error(error));

    // Clear form inputs
    setImage("");
    setTitle("");
    setLocation("");
    setDate("");
    setCapacity("");
  

  };

  return (
    <>
      <h2>Create Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="image-url">Image URL:</label>
          <input
            id="image-url"
            type="url"
            value={image}
            onChange={(event) => setImage(event.target.value)}
          />
        </div>

        {/* <div>
        <label htmlFor="image url">Image URL:</label>
        <input
          id="image url"
          value={image}
          onChange={(event) => setTitle(event.target.value)}
        />

      </div> */}

        <br />

        <div>
          <label htmlFor="title">Title:</label>
          <input
            id="title"
            type="text"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />
        </div>
        <br />

        <div>
          <label htmlFor="location">Location:</label>
          <input
            id="location"
            value={location}
            onChange={(event) => setLocation(event.target.value)}
          />
        </div>
        <br />

        <div>
          <label htmlFor="date">Date:</label>
          <input
            id="date"
            type="text"
            value={date}
            onChange={(event) => setDate(event.target.value)}
          />
        </div>
        <br />

        <div>
          <label htmlFor="capacity">Capacity:</label>
          <input
            id="capacity"
            type="number"
            value={capacity}
            onChange={(event) => setCapacity(event.target.value)}
          />
        </div>
        <br />

        <button type="submit">Add Ticket</button>
      </form>
    </>
  );
}

export default NewTicketForm;
