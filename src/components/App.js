import { useEffect, useState } from 'react'
import { Route, Switch } from 'react-router-dom'
import NavBar from './NavBar'
import TicketList from './TicketList'
import NewTicketForm from './NewTicketForm'
import Home from './Home'
import Contacts from './Contacts'
import Events from './Events'

const App = () => {
  const [data, setData] = useState([])
  const [endpoint, setEndPoint] = useState(
    'http://localhost:4300/tickets?_sort=id&_order=desc'
  )

  const fetchData = async () => {
    const response = await fetch(endpoint)

    // console.log('endpoint', endpoint)
    const tickets = await response.json()
    // console.log('tickets', tickets)
    return tickets
  }
  function searchEvent(term) {
   
    const found = data.filter((event)=>event.name=== term)
     console.log(term, found)
    setData(found)   
  }
  
  
    function updateCapacity(ticketId,available_tickets) {
      const updatedTickets = data.map((ticket) => {
        if (ticket.id === ticketId) {
          if (available_tickets !== 0){
            return {
              ...ticket,
              available_tickets: ticket.available_tickets - 1,
            }


          }
          
        }
        return ticket
      })
      setData(updatedTickets)
    }



   

  useEffect(() => {
    fetchData()
      .then((res) => {
        setData(res)
      })
      .catch((err) => {
        console.log('Error in fetching tickets: ', err)
      })
  }, [])
  return (
    <div className='App'>
      <NavBar
        setData={setData}
        fetchData={fetchData}
        setEndPoint={setEndPoint}
        searchEvent={searchEvent}
      ></NavBar>

      <TicketList tickets={data} setData={setData} fetchData={fetchData} updateCapacity={updateCapacity} />
      <NewTicketForm />
    </div>
  )
}

export default App
