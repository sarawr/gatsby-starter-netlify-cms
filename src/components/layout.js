import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Navbar from './Navbar'
import Footer from './Footer'
import './all.sass'

class TemplateWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rememberY: 0,
    }
  }

  render() {
    return <div className="hugo-wrapper">
      <Helmet title="Hugo Lundgren" />
      <Navbar />
      <div>{this.props.children}</div>
      <Footer />
    </div>
  }
}


export default TemplateWrapper
