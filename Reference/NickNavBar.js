import React from 'react'
import { Link } from 'react-router-dom'

// ! We've used Bulmas nav, with LINKS inside, so that the page
// ! doesn't reload.
const NavBar = () => {
  return <nav className="navbar" role="navigation" aria-label="main navigation">
    <div className="navbar-menu">
      <div className="navbar-end">
        <div className="navbar-item">
          <div className="buttons">
            <Link to="/cheeses" className="button is-warning">
              <strong>Cheeses</strong>
            </Link>
            <Link to="/" className="button is-light">
              Home
            </Link>
            <Link to="/register" className="button is-light">
              Register
            </Link>
            <Link to="/login" className="button is-light">
              Login
            </Link>
            <Link to="/create" className="button is-primary">
              Create 🧀
            </Link>
          </div>
        </div>
      </div>
    </div>
  </nav>
}

export default NavBar