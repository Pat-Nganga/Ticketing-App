import React, { useState, useEffect } from "react";
import "./css/TicketList.css";

function TicketList() {
  const [tickets, setTickets] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [editingTicket, setEditingTicket] = useState(null);

  useEffect(() => {
    fetch("http://localhost:4300/tickets")
      .then((response) => response.json())
      .then((tickets) => setTickets(tickets))
      .catch((error) => console.error(error));
  }, []);

  function handleEditClick(ticket) {
    setEditingTicket(ticket);
    setIsModalVisible(true);
  }

  function handleUpdateTicket(updatedTicket) {
    const updatedTickets = tickets.map((ticket) =>
      ticket.id === updatedTicket.id ? updatedTicket : ticket
    );
    setTickets(updatedTickets);

    fetch(`http://localhost:4300/tickets/${updatedTicket.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedTicket),
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error(error));
  }

  function updateCapacity(ticketId) {
    const updatedTickets = tickets.map((ticket) => {
      if (ticket.id === ticketId) {
        return {
          ...ticket,
          available_tickets: ticket.available_tickets - 1,
        };
      }
      return ticket;
    });
    setTickets(updatedTickets);
  }

  function handleDelete(ticketId) {
    const updatedTickets = tickets.filter((ticket) => ticket.id !== ticketId);
    setTickets(updatedTickets);

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
          <div key={ticket.id} className="ticket-card">
            <img
              src={ticket.image}
              alt={ticket.name}
              className="ticket-image"
            />

            <div>
              <h2 className="ticket-name">{ticket.name}</h2>
              <p className="ticket-location">
                <strong>Location:</strong>
                {ticket.location}
              </p>
              <p className="ticket-date">
                <strong>Date:</strong>
                {ticket.date}
              </p>
              <p className="ticket-capacity">
                <strong> Remaining tickets:</strong>
                {ticket.available_tickets}
              </p>
            </div>
            
            <div className="buttons-container">
              <button onClick={() => updateCapacity(ticket.id)}>Buy</button>
              <button onClick={() => handleDelete(ticket.id)}>Update</button>
              <button onClick={() => handleDelete(ticket.id)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TicketList;
