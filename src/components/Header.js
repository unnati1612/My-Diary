import React from 'react'
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
     <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <Link class="navbar-brand fs-4" to="/">Home</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
       
        <li class="nav-item fs-5 text-black me-3">
          <Link class="nav-link" to="/job">Job List</Link>
        </li>
        <li class="nav-item fs-5 me-3">
          <Link class="nav-link" to="/contact">Contact List</Link>
        </li>
        <li class="nav-item fs-5">
          <Link class="nav-link" to="/todo">To Do List</Link>
        </li>
      </ul>
     
    </div>
  </div>
</nav>
    </div>
  )
}

export default Header