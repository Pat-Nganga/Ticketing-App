import React, { useState, useEffect } from "react";
import "./css/TicketList.css";

function TicketList({tickets,ticketId, updateCapacity}) {
 tickets.map((ticket)=>{console.log(ticket.id);})


  return (
    <div className='ticket-list-container'>
      {/* <h1>Ticket List</h1> */}
      <div className='ticket-cards-container'>
        {tickets.map((ticket) => (
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
            </div>
            
            <div className="buttons-container">
              {/* <button onClick={() => handleDelete(ticket.id)}>Update</button>
              <button onClick={() => handleDelete(ticket.id)}>Delete</button> */}
              <button onClick={() => updateCapacity(ticket.id,ticket.available_tickets)}>
                Buy button
              </button>
              
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TicketList;
