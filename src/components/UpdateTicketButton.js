// import React, { useState } from "react";
// import axios from "axios";

// function UpdateTicketButton({ ticket }) {
//   const [showModal, setShowModal] = useState(false);
//   const [title, setTitle] = useState(ticket.title);
//   const [description, setDescription] = useState(ticket.description);
//   const [status, setStatus] = useState(ticket.status);

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     const updatedTicket = { title, description, status };
//     try {
//       await axios.put(`/tickets/${ticket.id}`, updatedTicket);
//       setShowModal(false);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <>
//       <button onClick={() => setShowModal(true)}>Update</button>
//       {showModal && (
//         <div>
//           <form onSubmit={handleSubmit}>
//             <label>
//               Title:
//               <input
//                 type="text"
//                 value={title}
//                 onChange={(event) => setTitle(event.target.value)}
//               />
//             </label>
//             <label>
//               Location:
//               <textarea
//                 value={description}
//                 onChange={(event) => setDescription(event.target.value)}
//               />
//             </label>
//             <label>
//               Status:
//               <select
//                 value={status}
//                 onChange={(event) => setStatus(event.target.value)}
//               >
//                 <option value="open">Open</option>
//                 <option value="in progress">In Progress</option>
//                 <option value="resolved">Resolved</option>
//               </select>
//             </label>
//             <button type="submit">Update Ticket</button>
//             <button type="button" onClick={() => setShowModal(false)}>
//               Cancel
//             </button>
//           </form>
//         </div>
//       )}
//     </>
//   );
// }
// export default UpdateTicketButton