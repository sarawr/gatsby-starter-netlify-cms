import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import './all.sass'

class TemplateWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rememberY: 0,
    }
  }

  componentDidMount() {
    console.log('Tempaltewrapper did ount')
  }

  render() {
    return <div className="hugo-wrapper">
      <Helmet title="Hugo Lundgren" />
      <Navbar />
      <div>{this.props.children()}</div>
      <Footer />
    </div>
  }
}
/*
const TemplateWrapper = ({ children }) => (
  <div className="hugo-wrapper">
    <Helmet title="Hugo Lundgren" />
    <Navbar />
    <div>{children()}</div>
    <Footer />
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}*/

export default TemplateWrapper
