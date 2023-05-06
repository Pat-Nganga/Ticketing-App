
import React, { useState } from 'react'
import './css/NewTicketForm.css'

function NewTicketForm() {
  const [image, setImage] = useState('')
  const [name, setName] = useState('')
  const [location, setLocation] = useState('')
  const [date, setDate] = useState('')
  const [capacity, setCapacity] = useState('')
  const [available_tickets, setAvailableTickets] = useState('')
  

  
  const handleSubmit = (event) => {
    event.preventDefault()

    const newTicket = {
      image,
      name,
      location,
      date,
      capacity,
      available_tickets,
    }

    fetch('http://localhost:4300/tickets', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newTicket),
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error(error))

    
    setImage('')
    setName('')
    setLocation('')
    setDate('')
    setCapacity('')
    setAvailableTickets('')
  }

  return (
    <>
      <h2>Create New Ticket</h2>
      <form onSubmit={handleSubmit} className="Add-Form">
        <div>
          <label htmlFor='image-url'>Image URL:</label>
          <input
            id='image-url'
            type='url'
            value={image}
            onChange={(event) => setImage(event.target.value)}
          />
        </div>

        <br />

        <div>
          <label htmlFor='name'>Name:</label>
          <input
            id='name'
            type='text'
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </div>
        <br />

        <div>
          <label htmlFor='location'>Location:</label>
          <input
            id='location'
            value={location}
            onChange={(event) => setLocation(event.target.value)}
          />
        </div>
        <br />

        <div>
          <label htmlFor='date'>Date:</label>
          <input
            id='date'
            type='text'
            value={date}
            onChange={(event) => setDate(event.target.value)}
          />
        </div>
        <br />

        <div>
          <label htmlFor='capacity'>Capacity:</label>
          <input
            id='capacity'
            type='number'
            value={capacity}
            onChange={(event) => setCapacity(event.target.value)}
          />
        </div>
        <br />
        <div>
          <label htmlFor='available_tickets'>Available Tickets:</label>
          <input
            id='available_tickets'
            type='number'
            value={available_tickets}
            onChange={(event) => setAvailableTickets(event.target.value)}
          />
        </div>
        <br />

        <button type='submit'>Add Ticket</button>
      </form>
    </>
  )
}

export default NewTicketForm
