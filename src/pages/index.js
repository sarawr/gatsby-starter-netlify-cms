import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'

export default class IndexPage extends React.Component {

  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark
    return (
      <section className="section">
       <div className="columns">
          <div className="column is-12">
        <div className="section">
        <div className="container work-page">
          {posts
            .filter(post => post.node.frontmatter.templateKey === 'portfolio-post')
            .sort()
            .map(({ node: post }) => (
              <div className="work-item">
              <Link to={post.fields.slug} className="image-hover">
              <div
                className= "work-thumbnail"
                key={post.id}
                style={{ backgroundImage: `url(${post.frontmatter.image})` }}
              ><div className="work-thumbnail-filter"></div>
              </div>
              </Link>
              <p className="description">
                  <Link to={post.fields.slug}>
                    {post.frontmatter.title}
                  </Link>
              </p>
              </div>
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
            image
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`
