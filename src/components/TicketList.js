
import React, {useState, useEffect} from 'react'
import './css/TicketList.css'

const apiURL = 'http://localhost:4300/tickets'



export default function TicketList({ tickets, setTickets }) {
  function handleDelete(ticketId) {
    const updatedTickets = tickets.filter((ticket) => ticket.id !== ticketId)

    fetch(`${apiURL}/${ticketId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setTickets(updatedTickets)
        console.log(data)
      })
      .catch((error) => console.error(error))
  }
const [editTicket, setEditTicket] = useState(null);
const [showEditModal, setShowEditModal] = useState(false);


function handleEdit(ticketId) {
  const ticketToEdit = tickets.find((ticket) =>
    ticketId ? ticketId === ticket.id : null
  )
  setEditTicket(ticketToEdit);
  setShowEditModal(true);
}


function handleUpdate() {
  fetch(`${apiURL}/${editTicket.id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(editTicket),
  })
    .then((res) => res.json())
    .then((result) => {
      setTickets(
        tickets.map((ticket) => {
          return ticket.id === result.id ? { ...result } : { ...ticket };
        })
      );
      setShowEditModal(false);
    })
    .catch((err) => console.log("error: ", err));
}




  function updateCapacity(ticket, setTickets, tickets) {
   
    return fetch(`${apiURL}/${ticket.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...ticket,
        available_tickets: ticket.available_tickets - 1,
      }),
    })
      .then((res) => res.json())
      .then((result) => {
        setTickets(
          tickets.map((ticket) => {
            return ticket.id === result.id ? { ...result } : { ...ticket };
          })
        );
      })
      .catch((err) => console.log("error: ", err));
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

            <div className="ticket-card">
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

              {showEditModal && (
                <div className="edit-modal">
                  <div className="edit-modal-content">
                    <h2>Edit Ticket Details</h2>
                    <label>
                      Name:
                      <input
                        type="text"
                        value={editTicket.name}
                        onChange={(e) =>
                          setEditTicket({ ...editTicket, name: e.target.value })
                        }
                      />
                    </label>
                    <label>
                      Location:
                      <input
                        type="text"
                        value={editTicket.location}
                        onChange={(e) =>
                          setEditTicket({
                            ...editTicket,
                            location: e.target.value,
                          })
                        }
                      />
                    </label>
                    <label>
                      Date:
                      <input
                        type="date"
                        value={editTicket.date}
                        onChange={(e) =>
                          setEditTicket({ ...editTicket, date: e.target.value })
                        }
                      />
                    </label>
                    <label>
                      Available Tickets:
                      <input
                        type="number"
                        value={editTicket.available_tickets}
                        onChange={(e) =>
                          setEditTicket({
                            ...editTicket,
                            available_tickets: e.target.value,
                          })
                        }
                      />
                    </label>
                    <button onClick={() => handleUpdate()}>Save Changes</button>
                    <button onClick={() => setShowEditModal(false)}>
                      Cancel
                    </button>
                  </div>
                </div>
              )}

              <button
                onClick={() => updateCapacity(ticket, setTickets, tickets)}
              >
                Buy button
              </button>
              <button onClick={() => handleDelete(ticket.id)}>Delete</button>
              <button onClick={() => handleEdit(ticket.id)}>Edit</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

