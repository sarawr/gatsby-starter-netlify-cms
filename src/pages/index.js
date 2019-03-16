import React, { useState } from 'react'
import { StaticQuery, graphql } from "gatsby"
import PropTypes from 'prop-types'

import PortfolioBox from '../components/PortfolioBox'
import Layout from "../components/layout"

import './index.sass'

const IndexPage = () => {
  const [category, setCategory ] = useState('')
  console.log('cat', category == '')
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
                  category
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
                  <h2 className="wide-headline">Featured work</h2>
                  {/*TODO: Change when categories are set.<h2 className="wide-headline">
                    <span>Categories: </span>
                    <span onClick={() => setCategory('')} className="category-title">All</span>
                    <span> | </span>
                    <span onClick={() => setCategory('sound')} className="category-title">Sound</span>
                    <span> | </span>
                    <span onClick={() => setCategory('music')} className="category-title">Music</span>
                    <span> | </span>
                    <span onClick={() => setCategory('interaction')} className="category-title">Interaction </span>
                  </h2>*/}
                  <div className="work-page">
                    {posts
                      .filter(post => post.node.frontmatter.templateKey === 'portfolio-post')
                      .filter(post => category == '' ? true : post.node.frontmatter.category === category)
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

