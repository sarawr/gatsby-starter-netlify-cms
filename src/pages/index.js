import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import PortfolioBox from '../components/PortfolioBox'

let scrollY = 0

export default class IndexPage extends React.Component {
  componentDidMount() {
    window.setTimeout(() => window.scrollTo(0, scrollY), 0)
  }

  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark
    return (
      <section className="section">
       <div className="columns">
          <div className="column is-12">
           <div className="index-header">
            <h1>Music & Sound for Visual Media</h1>
            <h2>Music composing | Sound design | Sound Mix | Audio programming</h2>
          </div>
        <div className="section">
        <h2 className="wide-headline">Featured work:</h2>
        <div className="work-page" onClick={() => {
          scrollY = window.scrollY
        }}>
          {posts
            .filter(post => post.node.frontmatter.templateKey === 'portfolio-post')
            .map(({ node: post }) => (
              <PortfolioBox link = {post.fields.slug}
                            key = {post.id}
                            backgroundImage = {post.frontmatter.image}
                            description = {post.frontmatter.title}
                            contentDescription={post.frontmatter.description} />
            ))}
          </div>
           </div></div>
        </div>
      </section>
    )
  }
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          fields {
            slug
          }
          frontmatter {
            title
            templateKey
            description
            image
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`
