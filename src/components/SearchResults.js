import React from 'react'

import TicketList from './TicketList'

export default function SearchResults({ searchResults, setTickets }) {
  return <TicketList tickets={searchResults} setTickets={setTickets} />
}
