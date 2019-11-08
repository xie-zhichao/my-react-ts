import React from "react"
import { Switch, Link, RouteComponentProps } from "react-router-dom"

const Topics: React.FC<RouteComponentProps> = ({ match, children }) => (
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
    <Switch>
      {children}
    </Switch>
  </div>
)

export default Topics
