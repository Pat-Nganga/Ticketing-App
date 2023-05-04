// import React, { useState, useEffect } from 'react'
//  import './css/NavBar.css'

// function NavBar() {
//   const [searchTerm, setSearchTerm] = useState('')
//   const [tickets, setTickets] = useState([])

//   useEffect(() => {
//     fetch('http://localhost:4300/tickets')
//       .then((response) => response.json())
//       .then((tickets) => setTickets(tickets))
//   }, [])

//   const handleSearchSubmit = (event) => {
//     setSearchTerm(event.target.value)
//   }

//   // const filteredTickets = tickets.filter((ticket) =>
//   //   ticket.name.toLowerCase().includes(searchTerm.toLowerCase())
//   //)

//   return (
//     <div className='menu'>
//       <div className='logo'>
//         <h3>TICKETOPIA</h3>
//       </div>
//       <nav>
//         <ul className='navigation'>
//           <li className='nav-link'>
//             <a href='/'>Home</a>
//           </li>
//           <li className='nav-link'>
//             <a href='/contacts'>Contacts</a>
//           </li>
//           <li className='nav-link'>
//             <a href='/events'>Events</a>
//           </li>
//         </ul>
//       </nav>
//       <div className='search'>
//         <form>
//           <input
//             type='text'
//             placeholder='Search here'
//             value={searchTerm}
//             // onChange={(e) => handleSearchSubmit(e.target.value)}
//             id='search-input'
//             className='input'
//           />
//           <button
//             type='submit'
//             onSubmit={(e) => handleSearchSubmit(e.target.value)}
//             className='search-button'
//           >
//             Search
//           </button>
//         </form>
//       </div>
//     </div>
//   )
// }

// export default NavBar

import React, { useState } from 'react'
import './css/NavBar.css'

const NavBar = ({ setData, fetchData, setEndPoint }) => {
  const [searchTerm, setSearchTerm] = useState('')

  const handleSearchSubmit = (text) => {
    setSearchTerm(text)

    const url = `http://localhost:4300/tickets?_sort=id&_order=desc&q=${text}`
    // console.log('text', text)
    // console.log('url', url)
    setEndPoint(url)
    fetchData()
      .then((res) => {
        // console.log('res>>', res)
        setData(res)
      })
      .catch((error) => {
        console.error(error)
      })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const text = event.target.elements[0].value
    handleSearchSubmit(text)
  }

  return (
    <div className='menu'>
      <div className='logo'>
        <h3>TICKETOPIA</h3>
      </div>
      <nav>
        <ul className='navigation'>
          <li className='nav-link'>
            <a href='/'>Home</a>
          </li>
          <li className='nav-link'>
            <a href='/contacts'>Contacts</a>
          </li>
          <li className='nav-link'>
            <a href='/events'>Events</a>
          </li>
        </ul>
      </nav>
      <div className='search'>
        <form onSubmit={handleSubmit}>
          <input
            type='text'
            placeholder='Search here'
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            id='search-input'
            className='input'
          />
          <button type='submit' className='search-button'>
            Search
          </button>
        </form>
      </div>
    </div>
  )
}

export default NavBar
