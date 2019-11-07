import React from "react"
import { Link } from "react-router-dom"

const Home = () => (
  <div>
    <h2>Home</h2>
    <ul>
      <li>
        <Link to="/home">Home</Link>
      </li>
      <li>
        <Link to="about">About</Link>
      </li>
      <li>
        <Link to="topics">Topics</Link>
      </li>
    </ul>
    Welcome!
    <div style={{ border: "1px dotted grey" }} />
  </div>
)

export default Home
