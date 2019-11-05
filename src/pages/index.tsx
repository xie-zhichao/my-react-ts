import React from "react"
import { Route, Link, RouteComponentProps } from "react-router-dom"

export const Home = () => (
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

const Topic: React.FC<RouteComponentProps> = ({ match }) => {
  const { topicId } = match.params as BaseParams
  return (
  <div>
    <h3>{topicId}</h3>
  </div>
)
  }

export const Topics: React.FC<RouteComponentProps> = ({ match }) => (
  <div>
    <h2>Topics</h2>
    <ul>
      <li>
        <Link to={`${match.url}/rendering`}>Rendering with React</Link>
      </li>
      <li>
        <Link to={`${match.url}/components`}>Components</Link>
      </li>
      <li>
        <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
      </li>
    </ul>

    <Route path={`${match.url}/:topicId`} component={Topic} />
    <Route
      exact
      path={match.url}
      render={() => <h3>Please select a topic.</h3>}
    />
  </div>
)

export const About = () => (
  <div>
    <h2>About</h2>
  </div>
)

export default Home