import React, { useState, useEffect } from 'react'
import './css/TicketList.css'

function TicketList() {
  const [tickets, setTickets] = useState([])

  useEffect(() => {
    fetch('http://localhost:4300/tickets')
      .then((response) => response.json())
      .then((tickets) => setTickets(tickets))
      .catch((error) => console.error(error))
  }, [])

  return (
    <div className="ticket-list-container">
      {/* <h1>Ticket List</h1> */}
      <div className="ticket-cards-container">
        {tickets.map((ticket) => (
          <div key={ticket.id} className="ticket-card">
            <img
              src={ticket.image}
              alt={ticket.name}
              className="ticket-image"
            />
            <div className="ticket-card">
              <h2 className="ticket-name">{ticket.name}</h2>
              <p className="ticket-location">
                <strong>Location:</strong>{ticket.location}
              </p>
              <p className="ticket-date"><strong>Date:</strong>{ticket.date}</p>
              <p className="ticket-capacity">
               <strong> Remaining tickets::</strong>{ticket.capacity}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TicketList

