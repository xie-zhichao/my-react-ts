import React from 'react'
import { Switch, Route, Redirect, RouteComponentProps } from 'react-router-dom'
import menuTree, { IMenuTree } from '@/config/routes'
import AuthorizedRoute from '../../components/AuthorizedRoute'

import './index.scss'

const genRouteTree = (memus: IMenuTree[]) => {
  const routes: Route[] = []

  return routes
}

const PageContent: React.FC<RouteComponentProps> = ({ match }) => {
  return <div className="basic-layout-content">
    <Switch>
      {genRouteTree(menuTree)}
      <Redirect to={`${match.url}`} />
    </Switch>
  </div>
}

export default PageContent
