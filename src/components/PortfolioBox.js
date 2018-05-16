import React from 'react'
import Link from 'gatsby-link'
import PropTypes from 'prop-types'

export default class PortfolioBox extends React.Component {
	constructor() {
    super()
    this.state = {
      hover: false
    }
    this.onMouseOver = this.onMouseOver.bind(this)
  }
	onMouseOver(){
		this.setState({
      hover: !this.state.hover,
    })
	}
  render() {
    return (
      <div className="work-item-wrapper"
           onMouseEnter={this.onMouseOver}
            onMouseLeave={this.onMouseOver}>
     <div className="work-item">
        <Link to={this.props.link} className="image-hover">
	          <div
	            className= "work-thumbnail"
	            key={this.props.key}
	            style={{ backgroundImage: `url(${this.props.backgroundImage})` }}
	          >
             {this.state.hover ?
            <div className="work-thumbnail-filter"> <p className="description">
                {this.props.description}
          </p></div> : ''}


          </div>
        </Link>
     </div>
     </div>
    )
  }
}

PortfolioBox.propTypes = {
  link: PropTypes.string,
  key: PropTypes.string,
  backgroundImage: PropTypes.string,
  description: PropTypes.string,
}