import React, { lazy, Suspense } from 'react'
import { Route, Redirect, Switch, RouteComponentProps } from 'react-router-dom'
import { Spin } from 'antd'
import menuTree, { IMenuTree, hasChild } from '@/config/routes'
import Page404 from '@/pages/404'

import './index.scss'

const PageContent: React.FC<RouteComponentProps> = props => {

  function waitLazyComponent(component: any) {
    const Component = lazy(component)
    return (props: RouteComponentProps) => (
      <Suspense
        fallback={
          <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <Spin tip="Loading..." />
          </div>
        }
      >
        <Component {...props} />
      </Suspense>
    )
  }

  function redirectComponent(redirect: string) {
    return (props: RouteComponentProps) => {
      return <Redirect to={`${redirect || '/auth/login'}`} />
    }
  }

  function genRoute(menu: IMenuTree): JsxElementOrNull {
    const { path, exact, redirect, component, lazy } = menu

    if (!component && !redirect) {
      return null
    }

    const routeProps = {
      path,
      key: menu.path,
      exact
    }

    return <Route {...routeProps} component={redirect ? redirectComponent(redirect) : 
      lazy ? waitLazyComponent(component) : component} />
  }

  function genRoutes(menus: IMenuTree[]): JsxElementOrNull[] {
    return menus.reduce<JsxElementOrNull[]>((prev: JsxElementOrNull[], next: IMenuTree) => {
      return prev.concat(genRoute(next)).concat(hasChild(next) ? genRoutes(next.children!) : [])
    }, [])
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
