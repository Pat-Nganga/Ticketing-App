import { useEffect, useState } from 'react'
import NavBar from './NavBar'
import TicketList from './TicketList'
import NewTicketForm from './NewTicketForm'


const App = () => {
  const [data, setData] = useState([])
  const [endpoint, setEndPoint] = useState('http://localhost:4300/tickets')

  const fetchData = async () => {
    const response = await fetch(endpoint)

    console.log('endpoint', endpoint)
    const tickets = await response.json()
    // console.log('tickets', tickets)
    return tickets
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
      <NavBar setData={setData} fetchData={fetchData} setEndPoint={setEndPoint}>
        
        
      </NavBar>

      <TicketList tickets={data} setData={setData} fetchData={fetchData} />
      <NewTicketForm />
    </div>
  )
}

export default App
