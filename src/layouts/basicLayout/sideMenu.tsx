import React from 'react'
import { Icon, Menu } from 'antd'
import { withRouter, RouteComponentProps } from 'react-router-dom'
import routes, { IRouteItem } from '../../config/routes'

const Menus: React.FC<RouteComponentProps> = props => {
  const { location, history } = props

  function handleNavClick({ key }: any) {
    history.push(key)
  }

  function hasChild(route: IRouteItem) {
    return Array.isArray(route.children) && route.children.length > 0
  }

  function genSubMenu(route: IRouteItem) {
    return (
      <Menu.SubMenu
        title={
          <span>
            {route.icon && <Icon type={route.icon} />}
            <span>{route.name}</span>
          </span>
        }
        key={route.path}
      >
        {genMenus(route.children)}
      </Menu.SubMenu>
    )
  }

  function genMenItem(route: IRouteItem) {
    return (
      <Menu.Item key={route.path}>
        {route.icon && <Icon type={route.icon} />}
        <span>{route.name}</span>
      </Menu.Item>
    )
  }

  function genMenus(routes: any) {
    return routes.reduce((prev: any, next: any) => {
      return prev.concat(
        hasChild(next)
          ? genSubMenu(next)
          : genMenItem(next)
      )
    }, [])
  }

  return (
    <Menu
      theme="dark"
      mode="inline"
      selectedKeys={[location.pathname]}
      onClick={handleNavClick}
    >
      {genMenus(routes)}
    </Menu>
  )
}

export default withRouter(Menus)
