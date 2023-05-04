import React from 'react'

import TicketList from './TicketList'
import NewTicketForm from './NewTicketForm'

export default function Home({ tickets, setTickets }) {
  return (
    <>
      <TicketList tickets={tickets} setTickets={setTickets} />
      <NewTicketForm />
    </>
  )
}
