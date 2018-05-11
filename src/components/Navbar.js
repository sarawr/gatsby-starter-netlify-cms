import React from 'react'
import Link from 'gatsby-link'

import github from '../img/github-icon.svg'
import logo from '../img/logo.svg'

const Navbar = () => (
  <nav className="navbar is-transparent">
    <div className="container">
      <div className="navbar-brand">
        <Link to="/" className="navbar-item">
          <strong>Hugo Lundgren</strong>
        </Link>
      </div>
      <div className="navbar-start">
      <Link className="navbar-item" to="/">
          Work
        </Link>
        <Link className="navbar-item" to="/about">
          About
        </Link>
        <Link className="navbar-item" to="/products">
          Contact
        </Link>
      </div>
      <div className="navbar-end">
      </div>
    </div>
  </nav>
)

export default Navbar
