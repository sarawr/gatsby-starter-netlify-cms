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
        <div className="columns page page--contact">
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
            <div className="section">
              <h3 className="title is-size-4 has-text-weight-bold is-bold-light hide-mobile">
                {mapTitle}
                <div className="section">
                  <iframe title="A map to find hugo" className="hide-mobile" width="400" height="400" id="gmap_canvas" src="https://maps.google.com/maps?q=G%C3%A4strikegatan%209&t=&z=13&ie=UTF8&iwloc=&output=embed" allowfullscreen frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
              </div>
              </h3>
            </div>
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
