import React from "react"
import { Link } from "gatsby"
import Footer from "./Footer"
import Nav from "./Nav"

import "../assets/scss/main.scss"
import { rhythm, scale } from "../utils/typography"

interface Props {
  title: string
  children?: any
}

const Layout = ({ title, children }: Props) => {
  const rootPath = `${__PATH_PREFIX__}/`
  let header

  header = (
    <h1
      style={{
        ...scale(1.5),
        marginBottom: rhythm(1.5),
        marginTop: 0,
      }}
    >
      <Link
        style={{
          boxShadow: `none`,
          textDecoration: `none`,
          color: `inherit`,
        }}
        to={`/`}
      >
        {title}
      </Link>
    </h1>
  )

  return (
    <div
      style={{
        marginLeft: `auto`,
        marginRight: `auto`,
        maxWidth: rhythm(24),
        padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
      }}
    >
      <header>{header}</header>
      <Nav />
      <main>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
