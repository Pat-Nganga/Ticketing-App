import React, { useState, useEffect } from "react";
import "./css/TicketList.css";
import TicketCard from "./TicketCard";

function TicketList({ tickets, ticketId, updateCapacity }) {
  function handleDelete(ticketId) {
    const updatedTickets = tickets.filter((ticket) => ticket.id !== ticketId);

    fetch(`http://localhost:4300/tickets/${ticketId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error(error));
  }

  return (
    <div className="ticket-list-container">
      <div className="ticket-cards-container">
        {tickets.map((ticket) => (
          <TicketCard
            key={ticket.id}
            ticket={ticket}
            updateCapacity={updateCapacity}
            handleDelete={handleDelete}
          />
        ))}
      </div>
    </div>
  );
}

export default TicketList;
