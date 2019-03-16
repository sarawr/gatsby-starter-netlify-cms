import React from 'react'
import { StaticQuery, graphql } from "gatsby"
import PropTypes from 'prop-types'

import PortfolioBox from '../components/PortfolioBox'
import Layout from "../components/layout"

const IndexPage = () => {
  return (
    <StaticQuery
      query={graphql`
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
      `}
      render={data => {
        const { edges: posts } = data.allMarkdownRemark
        
        return <Layout>
          <section className="section">
            <div className="columns">
              <div className="column is-12">
                <div className="index-header">
                  <h1>Music & Sound for Visual Media</h1>
                  <h2>Music composing | Sound design | Sound Mix | Audio programming</h2>
                </div>
                <div className="section">
                  <h2 className="wide-headline">Featured work:</h2>
                  <div className="work-page">
                    {posts
                      .filter(post => post.node.frontmatter.templateKey === 'portfolio-post')
                      .map(({ node: post }) => (
                        <PortfolioBox link={post.fields.slug}
                          key={post.id}
                          fromIndex
                          backgroundImage={post.frontmatter.image}
                          description={post.frontmatter.title}
                          contentDescription={post.frontmatter.description} />
                      ))}
                  </div>
                </div></div>
            </div>
          </section>
        </Layout>
      }}
    >
    </StaticQuery>)
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default IndexPage

