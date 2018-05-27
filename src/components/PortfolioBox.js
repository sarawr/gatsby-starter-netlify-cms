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
  stringLenght(){
    if (this.props.description.length > 32) {
      return this.props.description.slice(0,32) + "..."
    }
    return this.props.description
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
            <div className="work-thumbnail-filter"> <span><p className="description">
                {this.props.description}</p>
                <p className="information">{this.props.contentDescription}</p></span>
          </div> : <div></div>}
          </div>
        </Link>
     </div>
     <p className="movie-title">{this.stringLenght()}</p>
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