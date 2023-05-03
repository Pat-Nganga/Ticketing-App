import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import './css/NavBar.css'

function NavBar() {
  const [searchTerm, setSearchTerm] = useState('')
  const [tickets, setTickets] = useState([])

  useEffect(() => {
    fetch('http://localhost:4300/tickets')
      .then((response) => response.json())
      .then((tickets) => setTickets(tickets))
  }, [])

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value)
  }

  const filteredTickets = tickets.filter((ticket) =>
    ticket.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <nav className='menu'>
      <div className='logo'>
        <h3>TICKETOPIA</h3>
      </div>
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
        <li className='search'>
          <form>
            <input
              type='text'
              placeholder='Search'
              value={searchTerm}
              onChange={handleSearchChange}
              id='search-input'
              className='input'
            />
            <button type='submit' className='search-button'>
              <FontAwesomeIcon icon={faSearch} />
            </button>
          </form>
          <ul>
            {filteredTickets.map((ticket) => (
              <li key={ticket.id}>{ticket.name}</li>
            ))}
          </ul>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar
