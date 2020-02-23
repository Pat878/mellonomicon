import React from "react"
import { Link } from "gatsby"
import "../assets/scss/nav.scss"

const Nav = () => (
  <div>
    <nav id="nav">
      <li>
        <Link to={"/about"}>About</Link>
      </li>
      <li>
        <Link to={"/blog"}>Blog</Link>
      </li>
      <li>
        <Link to={"/contact"}>Contact</Link>
      </li>
    </nav>
    <hr />
  </div>
)

export default Nav
