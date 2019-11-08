import React from 'react'
import { Route, Switch, RouteComponentProps } from 'react-router-dom'
import menuTree, { hasChild } from '@/config/routes'
import { redirectRender, lazyRender } from '@/common/render/renderUtils'

import './index.scss'

const PageContent: React.FC<RouteComponentProps> = props => {

  const EmptyRoute: React.FC<RouteComponentProps> = ({match}) => {
    return <Route
      exact
      path={match.url}
      render={() => <h3>Please select a topic.</h3>}
    />
  }

  function genRoute(menu: IMenuTree): React_Node {
    const { path, redirect, component, lazy, children, ...rest } = menu

    if (!path || (!component && !redirect)) {
      return null
    }

    return <Route
      path={path}
      key={path}
      {...rest}
      component={redirect ? redirectRender(redirect) :
        lazy ? lazyRender(component) : component}
      children={children && !rest.exact ? genRoutes(children) : undefined}
    />
  }

  function genRoutes(menus: IMenuTree[]): React_Node[] {
    return menus.reduce<React_Node[]>(
      (prev: React_Node[], next: IMenuTree) => {
        return prev.concat(genRoute(next))
          .concat(hasChild(next) && next.exact ? genRoutes(next.children!).concat(EmptyRoute) : [])
      },
      [])
  }

  return (
    <div
      style={{
        margin: '24px'
      }}
    >
      <Switch>
        {genRoutes(menuTree)}
      </Switch>
    </div>
  )
}

export default PageContent
