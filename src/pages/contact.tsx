import React, { useState } from "react"
import { graphql } from "gatsby"
import { navigate } from "gatsby-link"

import Layout from "../components/Layout"
import SEO from "../components/seo"

interface Props {
  data: {
    site: {
      siteMetadata: {
        title: string
      }
    }
  }
}

interface FormData {
  data: {
    name: string
    email: string
    message: string
  }
}

const Contact = ({ data }: Props) => {
  const [state, setState] = useState({})
  const siteTitle = data.site.siteMetadata.title

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState({ ...state, [e.target.name]: e.target.value })
  }

  const encode = (data: any) => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&")
  }

  const handleSubmit = (e: any) => {
    e.preventDefault()
    const form = e.target
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...state,
      }),
    })
      .then(() => navigate(form.getAttribute("action")))
      .catch(error => alert(error))
  }

  return (
    <Layout title={siteTitle}>
      <SEO title="Contact" />
      <div>
        <form
          name="contact"
          method="post"
          action="/thanks/"
          netlify-honeypot="bot-field"
          data-netlify="true"
          onSubmit={handleSubmit}
        >
          <input
            type="hidden"
            name="bot-field"
            value="contact"
            onChange={handleChange}
          />
          <label>
            Name:
            <p>
              <input
                type="text"
                name="name"
                id="name"
                onChange={handleChange}
              />
            </p>
          </label>
          <label>
            Email:
            <p>
              <input
                type="email"
                name="email"
                id="email"
                onChange={handleChange}
              />
            </p>
          </label>
          <label>
            Message:
            <p>
              <textarea
                name="message"
                id="message"
                rows="5"
                onChange={handleChange}
              />
            </p>
          </label>
          <button type="submit" className="send-button">
            Send
          </button>
          <input type="reset" value="Clear" className="clear-button" />
        </form>
      </div>
    </Layout>
  )
}

export default Contact

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`
