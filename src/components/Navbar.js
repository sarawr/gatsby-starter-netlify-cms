import React from 'react'
import Link from 'gatsby-link'

import linkedin from '../img/linkedin.svg'
import imdb from '../img/imdb.svg'

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
        <Link className="navbar-item" to="/contact">
          Contact
        </Link>
      </div>
      <div className="navbar-end hide-mobile">
                <div className="navbar-item"><a href="https://www.imdb.com/name/nm4323116/?ref_=nv_sr_1"><img src={imdb} style={{ width: '24px' }} /></a></div>
          <div className="navbar-item"><a href="https://www.linkedin.com/in/hugo-lundgren-50baa6b2/"><img src={linkedin} style={{ width: '24px' }} /></a></div>
      </div>
    </div>
  </nav>
)

export default Navbar
