import React from 'react'
import { Route, Switch, RouteComponentProps } from 'react-router-dom'
import menuTree, { hasChild } from '@/config/routes'
import { redirectRender, lazyRender } from '@/common/render/renderUtils'

import './index.scss'

const PageContent: React.FC<RouteComponentProps> = props => {

  const EmptyRoute: React.FC<RouteComponentProps> = ({ match }) => {
    return <Route
      exact
      path={match.url}
      render={() => <h3>内容没找到.</h3>}
    />
  }

  function genSubRoutes(menus: IMenuTree[], prePath: string): React.FC<RouteComponentProps> {
    return (props: RouteComponentProps) => {
      return <Switch>
        {genRoutes(menus, prePath)}
        <EmptyRoute {...props} />
      </Switch>
    }
  }

  function genRoute(menu: IMenuTree, prePath: string): React_Node {
    const { path, redirect, component, lazy, children, hideChildrenInMenu, ...rest } = menu

    if (!path || (!component && !redirect)) {
      return null
    }

    const fullPath = `${prePath}${path}`
    const renderRoute = (props: RouteComponentProps) => {
      const Comp = redirect ? redirectRender(redirect)
        : (lazy ? lazyRender(component) : component)
      const SubRoutes = children && hideChildrenInMenu ? genSubRoutes(children, fullPath) : undefined

      return <Comp {...props}>
        {SubRoutes ? <SubRoutes {...props} /> : undefined}
      </Comp>
    }

    return <Route
      path={fullPath}
      key={fullPath}
      {...rest}
      render={renderRoute}
    />
  }

  function genRoutes(menus: IMenuTree[], prePath = ''): React_Node[] {
    return menus.reduce<React_Node[]>(
      (prev: React_Node[], next: IMenuTree) => {
        return prev.concat(genRoute(next, prePath))
          .concat(hasChild(next) && !next.hideChildrenInMenu ? genRoutes(next.children!, `${prePath}${next.path}`).concat(EmptyRoute) : [])
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
