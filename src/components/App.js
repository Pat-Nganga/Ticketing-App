import { Routes, Route } from 'react-router-dom'

import { useState, useEffect } from 'react'

import NavBar from './NavBar'
import Home from './Home'
import About from './About'
import Contacts from './Contacts'
import SearchResults from './SearchResults'

import './css/App.css'

const apiURL = 'https://9561-102-215-76-91.ngrok-free.app/tickets'

function App() {
  const [tickets, setTickets] = useState([])


  function fetchTickets(apiURL) {
    fetch(apiURL)
      .then((response) => response.json())

      .then((data) => setTickets(data))
  }
  useEffect(() => {
    fetchTickets(apiURL)
  }, [])

  function handleDelete(ticketId) {
    fetch(`${apiURL}/${ticketId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        const updatedTickets = tickets.filter((ticket) => ticket.id !== ticketId)
        setTickets(updatedTickets)
      })
      .catch((error) => console.error(error))
  }
  function updateCapacity(ticket, setTickets, tickets) {
    return fetch(`${apiURL}/${ticket.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
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
            return ticket.id === result.id ? { ...result } : { ...ticket }
          })
        )
      })
      .catch((err) => console.log('error: ', err))
  }
  return (
    <div>
      <NavBar tickets={tickets} setTickets={setTickets} />
      <Routes>
        <Route
          path='/'
          element={
            <Home
              tickets={tickets}
              setTickets={setTickets}
              deleteOperation={handleDelete}
              updateCapacity={updateCapacity}
            />
          }
        />
        <Route path='/about' element={<About />} />
        <Route path='/contacts' element={<Contacts />} />
        <Route
          path='/search'
          element={
            <SearchResults
              searchResults={tickets}
              setTickets={setTickets}
              deleteOperation={handleDelete}
              updateCapacity={updateCapacity}
            />
          }
        />
      </Routes>
    </div>
  )
}

export default App
