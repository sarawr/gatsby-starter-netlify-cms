import React from 'react'
import Link from 'gatsby-link'

import linkedin from '../img/linkedin.svg'
import imdb from '../img/imdb.svg'
import menu from '../img/menu.svg'
import logo from '../img/HugoLogga.png'

export default class Navbar extends React.Component {
  constructor() {
    super()
    this.state = {
      toggle: false
    }
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick(){
    this.setState({
      toggle: !this.state.toggle,
    })
  }
  render() {
    return(
  <nav className="navbar is-transparent is-fixed-top">
    <div className="container hide-mobile">
      <div className="navbar-brand" >
        <Link to="/" className="navbar-item" >
          <img src={logo} style={{ height: '120px', paddingRight: '24px' }} alt="Hugo logo" />
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
      <div className="navbar-end">
                <div className="navbar-item"><a href="https://www.imdb.com/name/nm4323116/?ref_=nv_sr_1"><img alt="Imdb link" src={imdb} style={{ width: '24px' }} /></a></div>
          <div className="navbar-item"><a href="https://www.linkedin.com/in/hugo-lundgren-50baa6b2/"><img alt="Linkedin link" src={linkedin} style={{ width: '24px' }} /></a></div>
      </div>
    </div>

    <div className="container show-mobile">
      <div onClick={this.handleClick} className="navbar-brand">
          <strong>Hugo Lundgren</strong><div className="navbar-item"><img alt="Menu icon" src={menu} style={{ width: '24px' }} /></div>
      </div>

      {this.state.toggle ?
      <div className="navbar-start mobile-start">
      <Link onClick={this.handleClick} className="navbar-item" to="/">
          Work
        </Link>
        <Link onClick={this.handleClick} className="navbar-item" to="/about">
          About
        </Link>
        <Link onClick={this.handleClick} className="navbar-item" to="/contact">
          Contact
        </Link>
      </div> : '' }
    </div>

  </nav>
)}}

