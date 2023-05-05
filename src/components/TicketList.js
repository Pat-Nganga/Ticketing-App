
import React from 'react'
import './css/TicketList.css'

export default function TicketList({ tickets, setTickets,deleteTicket ,updateCapacity}) {
 
  
const showTickets=
  tickets.map((ticket) => (
          <div key={ticket.id} className='ticket-card'>
            <img
              src={ticket.image}
              alt={ticket.name}
              className='ticket-image'
            />

            <div className='ticket-card'>
              <h2 className='ticket-name'>{ticket.name}</h2>
              <p className='ticket-location'>
                <strong>Location:</strong>
                {ticket.location}
              </p>
              <p className='ticket-date'>
                <strong>Date:</strong>
                {ticket.date}
              </p>
              <p className='ticket-capacity'>
                <strong> Remaining tickets:</strong>
                {ticket.available_tickets}
              </p>
             
              <button
                onClick={() => updateCapacity(ticket, setTickets, tickets)}
              >
                Buy button
              </button>
              <button onClick={() => deleteTicket(ticket.id)}>Delete</button>
            </div>
          </div>
        ))
        

  return (
    <div className='ticket-list-container'>
      <div className='ticket-cards-container'>
        {tickets.length >0 ? showTickets : <h3>No tickets found</h3>}
      </div>
    </div>
  )

  }
