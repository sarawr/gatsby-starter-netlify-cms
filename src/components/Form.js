import React from "react";
import { navigateTo } from "gatsby-link";

function encode(data) {
  return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&")
}

export default class Form extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  handleSubmit = e => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...this.state })
    })
      .then(() => navigateTo('/thanks/'))
      .catch(error => alert(error))

    e.preventDefault();
  }

  render() {
    return (
      <div className="form">
        <form
          name="contact"
          method="post"
          action="/thanks/"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          onSubmit={this.handleSubmit}
        >
          <p hidden>
            <label>
              Don’t fill this out: <input name="bot-field" onChange={this.handleChange} />
            </label>
          </p>
          <div className="field">
          <p>
            <label>
              Your name:<br />
            <input type="text" class="input" name="name" onChange={this.handleChange}/>
            </label>
          </p>
          </div>
          <div className="field">
          <p>
            <label>
              Your email:<br />
              <input type="email" class="input" name="email" onChange={this.handleChange}/>
            </label>
          </p>
          </div>
          <div className="field">
          <p>
            <label>
              Message:<br />
              <textarea name="message" class="textarea" onChange={this.handleChange}/>
            </label>
          </p>
          </div>
          <p>
            <button className="button is-link" type="submit">Send</button>
          </p>
        </form>
      </div>
    )
  }
}