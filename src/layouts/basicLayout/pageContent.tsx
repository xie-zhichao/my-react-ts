import React from 'react'
import { Route, Switch, RouteComponentProps } from 'react-router-dom'
import menuTree, { hasChild } from '@/config/routes'
import { redirectRender, lazyRender } from '@/common/render/renderUtils'

import './index.scss'

const PageContent: React.FC<RouteComponentProps> = props => {

  function genRoute(menu: IMenuTree): JsxElementOrNull {
    const { path, redirect, component, lazy, children, ...rest } = menu

    if (!path || (!component && !redirect)) {
      return null
    }

    return <Route path={path} key={path} {...rest} component={redirect ? redirectRender(redirect) :
      lazy ? lazyRender(component) : component} />
  }

  function genRoutes(menus: IMenuTree[]): JsxElementOrNull[] {
    return menus.reduce<JsxElementOrNull[]>(
      (prev: JsxElementOrNull[], next: IMenuTree) => {
        return prev.concat(genRoute(next))
          .concat(hasChild(next) ? genRoutes(next.children!) : [])
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
