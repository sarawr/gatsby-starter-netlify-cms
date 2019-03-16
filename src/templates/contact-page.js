import React from 'react'
import PropTypes from 'prop-types'
import Content, { HTMLContent } from '../components/Content'
import Form from '../components/Form'
import Layout from "../components/layout"

export const ContactPageTemplate = ({ title, content, contentComponent, mapTitle }) => {
  const PageContent = contentComponent || Content

  return (
    <Layout>
      <section className="section">
        <div className="columns page">
          <div className="column is-5">
            <div className="section">
              <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
                {title}
              </h2>
              <PageContent className="content contact" content={content} />
              <div className="contact-info">
                <Form />
              </div>
            </div>
          </div>
          <div className="column is-4">
            <h3 className="title is-size-4 has-text-weight-bold is-bold-light hide-mobile">
              {mapTitle}
            </h3>
            <iframe className="hide-mobile" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3326.7085286621664!2d18.037115285266104!3d59.34118398157301!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465f9d7a6bb45a65%3A0x72278647da323ea6!2sG%C3%A4strikegatan+9%2C+113+62+Stockholm!5e0!3m2!1sen!2sse!4v1527454291455&zoom=15" width="380" height="380" frameborder="0" allowfullscreen></iframe>
          </div>
        </div>
      </section>
    </Layout>
  )
}

ContactPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  mapTitle: PropTypes.string,
  contentComponent: PropTypes.func,
}

const ContactPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <ContactPageTemplate
      contentComponent={HTMLContent}
      title={post.frontmatter.title}
      content={post.html}
      mapTitle={post.frontmatter.mapTitle}
    />
  )
}

ContactPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default ContactPage

export const contactPageQuery = graphql`
  query ContactPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        mapTitle
      }
    }
  }
`
