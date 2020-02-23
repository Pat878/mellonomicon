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
}

const About = ({ data }: Props) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout title={siteTitle}>
      <SEO title="About" />
      <div>
        <h3>Development</h3>

        <p>
          I'm a self-taught programmer who loves all facets of development.
          While I work mostly with Ruby and JavaScript, I enjoy the challenge of
          learning new languages. Lately, I'm most interested in Machine
          Learning and gaining more experience in that field.
        </p>

        <p>
          So far in my career, I've worked on maintaining e-commerce apps,
          executing pixel-perfect UX designs, and completing integrations with
          numerous popular APIs.
        </p>

        <p>
          I’m always open to collaboration and embracing new ways of solving
          problems, and I strive to do things right the first time in the most
          efficient way possible.
        </p>

        <h3>Music</h3>

        <p>
          One of the reasons I fell in love with coding is because it's an
          industry that celebrates creativity. One of my other creative passions
          is music. I've played guitar for over 20 years and have written and
          recorded original songs for over 10 years both under my name and in
          the band{" "}
          <a href="https://www.bridgeunderwater.com" target="_blank">
            Bridge Underwater
          </a>
          .
        </p>
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
