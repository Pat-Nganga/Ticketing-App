import React from 'react'
import './css/Contacts.css'

function Contacts() {
  const contacts = [
    {
      id: 1,
      name: 'Customer Support',
      phone: '+254 713765459',
      email: 'support@ticketopia.com',
    },
    {
      id: 2,
      name: 'Sales',
      phone: '+254 786450127',
      email: 'sales@ticketopia.com',
    },
    {
      id: 3,
      name: 'General Inquiries',
      phone: '+254 786450127',
      email: 'info@ticketopia.com',
    },
  ]

  return (
    <div className='contact-list-container'>
      <h1>Contact Us</h1>
      <ul className='contact-list'>
        {contacts.map((contact) => (
          <li key={contact.id}>
            <h2>{contact.name}</h2>
            <p>Phone: {contact.phone}</p>
            <p>Email: {contact.email}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Contacts
