import React from 'react'

import TicketList from './TicketList'
import NewTicketForm from './NewTicketForm'

export default function Home({ tickets, setTickets,deleteOperation ,updateCapacity}) {
  return (
    <>
      <TicketList
        tickets={tickets}
        setTickets={setTickets}
        deleteTicket={deleteOperation}
        updateCapacity={updateCapacity}
      />
      <NewTicketForm />
    </>
  )
}
