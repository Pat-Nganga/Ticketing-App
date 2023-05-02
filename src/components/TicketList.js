import React, { useState, useEffect } from 'react'
// import './TicketList.css' // import a CSS file for styling

function TicketList() {
  const [tickets, setTickets] = useState([])

  useEffect(() => {
    fetch('http://localhost:4300/tickets')
      .then((response) => response.json())
      .then((tickets) => setTickets(tickets))
      .catch((error) => console.error(error))
  }, [])

  return (
    <div className='ticket-list-container'>
      <h1>Ticket List</h1>
      <div className='ticket-cards-container'>
        {tickets.map((ticket) => (
          <div key={ticket.id} className='ticket-card'>
            <img
              src={ticket.image}
              alt={ticket.name}
              className='ticket-image'
            />
            <div className='ticket-details'>
              <h2 className='ticket-name'>{ticket.name}</h2>
              <p className='ticket-location'>{ticket.location}</p>
              <p className='ticket-date'>{ticket.date}</p>
              <p className='ticket-capacity'>Remaining tickets:{ticket.capacity}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TicketList

// import React, { useState, useEffect } from 'react'

// function TicketList() {
//   const [tickets, setTickets] = useState([])

//   useEffect(() => {
//     fetch('http://localhost:4300/tickets')
//       .then((response) => response.json())
//       .then((tickets) => setTickets(tickets))
//       .catch((error) => console.error(error))
//   }, [])

//   return (
//     <div>
//       <h1>Ticket List</h1>
//       <ul>
//         {tickets.map((ticket) => (
//           <li key={ticket.id}>
//             {ticket.name}
//             <br />
//             <img src={ticket.image} alt={ticket.name} />
//           </li>
//         ))}
//       </ul>
//     </div>
//   )
// }

// export default TicketList
