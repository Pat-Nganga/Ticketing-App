// import React, { useState, useEffect } from 'react'

// const Events = () => {
//   const [events, setEvents] = useState([])

//   useEffect(() => {
//     fetch('http://localhost:4300/events')
//       .then((response) => response.json())
//       .then((data) => setEvents(data))
//       .catch((error) => console.error(error))
//   }, [])

//   return (
//     <div>
//       <h2>Upcoming Events</h2>
//       {events.map((event) => (
//         <div key={event.id}>
//           <h3>{event.name}</h3>
//           <p>{event.date}</p>
//           <p>{event.location}</p>
//           <p>{event.description}</p>
//         </div>
//       ))}
//     </div>
//   )
// }

// export default Events
