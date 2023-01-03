import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <div class="collapse navbar-collapse justify-content-center" id="navbarCenteredExample">
      <ul class="navbar-nav mb-2 mb-lg-0 d-flex justify-content-between">
        <li class="nav-item">
             <NavLink to="/" className="link">Home</NavLink>
        </li>
        <li class="nav-item ms-5">
          <NavLink to="/greeting" className="link">Greeting</NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>
  )
}

export default Header
