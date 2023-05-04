import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './css/NavBar.css'

const NavBar = ({ tickets, setSearchResults }) => {
  const navigate = useNavigate()

  const [searchTerm, setSearchTerm] = useState('')
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
            <a href='/about'>About</a>
          </li>
        </ul>
      </nav>
      <div className='search'>
        <form
          onSubmit={(e) => {
            e.preventDefault()
            handleSubmit(searchTerm, tickets, setSearchResults, navigate)
          }}
        >
          <input
            type='text'
            placeholder='Search here'
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value)
              console.log(searchTerm)
            }}
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

function handleSubmit(searchText, tickets, setSearchResults, navigate) {
  let result = []
  result = tickets.filter((ticket) => ticket.name == searchText)
  if (result.length > 0) {
    setSearchResults(result)
    navigate('/search')
  }
}
export default NavBar
