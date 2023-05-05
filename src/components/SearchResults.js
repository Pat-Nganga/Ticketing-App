import React from 'react'

import TicketList from './TicketList'

export default function SearchResults({ searchResults, setTickets,deleteOperation,updateCapacity}) {
  return (
    <TicketList
      tickets={searchResults}
      setTickets={setTickets}
      deleteTicket={deleteOperation}
      updateCapacity={updateCapacity}
    />
  )
}
