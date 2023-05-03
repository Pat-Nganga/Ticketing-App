import React, { useState, useEffect } from 'react'

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
    <nav>
      <ul>
        <li>
          <a href='/'>Home</a>
        </li>
        <li>
          <a href='/contacts'>Contacts</a>
        </li>
        <li>
          <a href='/events'>Events</a>
        </li>
        <li>
          <form>
            <input
              type='text'
              placeholder='Search'
              value={searchTerm}
              onChange={handleSearchChange}
            />
          </form>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar
