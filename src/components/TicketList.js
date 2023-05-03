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

 
  
    function updateCapacity(ticketId) {
      const updatedTickets = tickets.map((ticket) => {
        if (ticket.id === ticketId) {
          return {
            ...ticket,
<<<<<<< HEAD
            available_tickets: ticket.available_tickets - 1 ,
          }
=======
            available_tickets: ticket.available_tickets - 1,
          };
>>>>>>> main
        }
        return ticket;
      });
      setTickets(updatedTickets);
    }



   
  return (
<<<<<<< HEAD
    <div className='ticket-list-container'>      
      <div className='ticket-cards-container'>
=======
    <div className="ticket-list-container">
      {/* <h1>Ticket List</h1> */}
      <div className="ticket-cards-container">
>>>>>>> main
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
                <strong>Location:</strong>
                {ticket.location}
              </p>
<<<<<<< HEAD
              <button onClick={() => updateCapacity(ticket.id)}>
                Buy Ticket
              </button>

             
=======
              <p className="ticket-date">
                <strong>Date:</strong>
                {ticket.date}
              </p>
              <p className="ticket-capacity">
                <strong> Remaining tickets:</strong>
                {ticket.available_tickets}
              </p>
              <button onClick={() => updateCapacity(ticket.id)}>Buy button</button>
>>>>>>> main
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TicketList

