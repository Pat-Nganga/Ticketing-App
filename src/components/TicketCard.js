import React from "react";

export default function TicketCard({ ticket, handleDelete, updateCapacity }) {
  const { title, name, image, location, date, available_tickets, id } = ticket;

  return (
    <div className="ticket-card">
      <img src={image} alt={image} className="ticket-image" />

      <div className="ticket-card">
        <h2 className="ticket-name">
          {title}
          {name}
        </h2>

        <p className="ticket-location">
          <strong>Location:</strong>
          {location}
        </p>
        <p className="ticket-date">
          <strong>Date:</strong>
          {date}
        </p>
        <p className="ticket-capacity">
          <strong> Remaining tickets:</strong>
          {available_tickets}
        </p>
      </div>

      <div className="buttons-container">
        {/* <button onClick={() => handleDelete(id)}>Update</button> */}
        <button onClick={() => handleDelete(id)}>Delete</button>
        <button onClick={() => updateCapacity(id, available_tickets)}>
          Buy button
        </button>
      </div>
    </div>
  );
}
