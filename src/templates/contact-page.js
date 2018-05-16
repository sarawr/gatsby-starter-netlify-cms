import React from 'react'
import PropTypes from 'prop-types'
import Content, { HTMLContent } from '../components/Content'

import map from '../img/staticmap.png'
import linkedin from '../img/linkedin.svg'
import imdb from '../img/imdb.svg'


export const ContactPageTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content

  return (
    <section className="section">
        <div className="columns page">
          <div className="column is-8">
            <div className="section">
              <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
                {title}
              </h2>
              <div className="contact-info">
              <div className="form">
              <form name="contact" method="POST" netlify>
                <div className="field"><p>
                  <label>Name <input type="text" class="input" name="name" /></label>
                </p></div>
                <div className="field"><p>
                  <label>Email <input type="email" class="input" name="email" /></label>
                </p></div>
                <div className="field"><p>
                <label>Message: <textarea class="textarea" name="message" /></label>
              </p></div>
                <p>
                  <button className="button is-link" type="submit">Send</button>
                </p>
              </form>
              </div>
              <PageContent className="content contact" content={content} />

              </div>
              <div className="map" style={{ backgroundImage: `url(${map})` }}></div>
            </div>
          </div>
        </div>

         <div className="social-mobile">
          <a href="https://www.imdb.com/name/nm4323116/?ref_=nv_sr_1"><img src={imdb} style={{ width: '24px' }} /></a>
          <a href="https://www.linkedin.com/in/hugo-lundgren-50baa6b2/"><img src={linkedin} style={{ width: '24px' }} /></a>
        </div>
    </section>
  )
}

ContactPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const ContactPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <ContactPageTemplate
      contentComponent={HTMLContent}
      title={post.frontmatter.title}
      content={post.html}
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
      }
    }
  }
`
