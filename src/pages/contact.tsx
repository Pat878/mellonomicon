import React from "react"
import { graphql } from "gatsby"

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
  location: Location
}

const About = ({ data }: Props) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Contact" />
      <div>
        <form method="post" netlify-honeypot="bot-field" data-netlify="true">
          <input type="hidden" name="bot-field" />
          <label>
            Name:
            <p>
              <input type="text" name="name" id="name" />
            </p>
          </label>
          <label>
            Email:
            <p>
              <input type="email" name="email" id="email" />
            </p>
          </label>
          <label>
            Message:
            <p>
              <textarea name="message" id="message" rows="5" />
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

export default About

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
