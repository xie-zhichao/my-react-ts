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
        <Link to="/home/about">About</Link>
      </li>
      <li>
        <Link to="/home/topics">Topics</Link>
      </li>
    </ul>

    <div style={{ border: "1px dotted grey" }} />
    Welcome!
  </div>
)

export default Home
