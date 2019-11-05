import React from 'react'
import { Switch, Route, Redirect, RouteComponentProps } from 'react-router-dom'

import Home, { About, Topics } from '../pages/index'

import './basicLayout.scss'

const BasicLayout: React.FC<RouteComponentProps> = ({ match }) => {

  return <div className="basic-layout">
    <div className="page-content">
    <Switch>
      <Route path={`${match.path}`} exact component={Home} />
      <Route path={`${match.path}/topics`} component={Topics} />
      <Route path={`${match.path}/about`} component={About} />
      <Redirect to={`${match.url}`} />
    </Switch>
    </div>
  </div>
}

export default BasicLayout
