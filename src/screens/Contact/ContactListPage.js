import React from 'react'
import { ToastContainer } from 'react-toastify'
import ContactList from './components/ContactList'
const ContactListPage = () => {
  return (
    <div>
    <ToastContainer />
      <h2 className='text-center text-decoration-underline mb-5 mt-3'>CONTACT LIST</h2>
      <ContactList />
    </div>
  )
}

export default ContactListPage