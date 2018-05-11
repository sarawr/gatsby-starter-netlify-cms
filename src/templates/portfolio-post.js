import React from 'react'
import PropTypes from 'prop-types'
import { kebabCase } from 'lodash'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import Content, { HTMLContent } from '../components/Content'

export const PortfolioPostTemplate = ({
  content,
  contentComponent,
  description,
  title,
  videoId,
  helmet,
}) => {
  const PostContent = contentComponent || Content
  return (
    <section className="section">
      {helmet || ''}
     <div className="modal is-active">
        <div className="modal-background"></div>
        <div className="modal-content">
                <div className="embed-video"><iframe className="video-frame" frameborder="0" src={"https://player.vimeo.com/video/"+videoId} allowfullscreen></iframe></div>
                <PostContent content={content} className="post-content" />  
              </div>
             <Link to="/"><button className="modal-close is-large" aria-label="close"></button></Link>
            </div>

    </section>
  )
}

PortfolioPostTemplate.propTypes = {
  content: PropTypes.string.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  videoId: PropTypes.string,
  helmet: PropTypes.instanceOf(Helmet),
}

const PortfolioPost = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <PortfolioPostTemplate
      content={post.html}
      contentComponent={HTMLContent}
      description={post.frontmatter.description}
      helmet={<Helmet title={`${post.frontmatter.title} | Portfolio`} />}
      title={post.frontmatter.title}
      videoId={post.frontmatter.videoId}
      image={post.frontmatter.image}
    />
  )
}

PortfolioPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default PortfolioPost

export const pageQuery = graphql`
  query PortfolioPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
        videoId
        image
      }
    }
  }
`
