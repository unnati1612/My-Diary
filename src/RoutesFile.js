import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './screens/Home'
import JobDetails from './screens/JobDetails'
import ContactListPage from './screens/Contact/ContactListPage'
import TodoList from './screens/ToDo/TodoList'

const RoutesFile = () => {
  return (
   <Routes>
    <Route path="/" element=<Home /> />
    <Route path="/job" element=<JobDetails /> />
    <Route path="/contact" element=<ContactListPage /> />
    <Route path="/todo" element=<TodoList /> />

   </Routes>
  )
}

export default RoutesFile