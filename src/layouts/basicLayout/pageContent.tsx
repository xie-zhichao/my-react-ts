import React from 'react'
import { Switch, Route, Redirect, RouteComponentProps } from 'react-router-dom'
import Home from '../../pages/home'
import Topics from '../../pages/topics'
import About from '../../pages/about'

import './index.scss'

const PageContent: React.FC<RouteComponentProps> = ({ match }) => {
  return <div className="basic-layout-content">
    <Switch>
      <Route path={`${match.path}`} exact component={Home} />
      <Route path={`${match.path}/topics`} component={Topics} />
      <Route path={`${match.path}/about`} component={About} />
      <Redirect to={`${match.url}`} />
    </Switch>
  </div>
}

export default PageContent
