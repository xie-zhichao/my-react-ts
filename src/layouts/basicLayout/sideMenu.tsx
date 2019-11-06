import React from 'react'
import { Icon, Menu } from 'antd'
import { withRouter, RouteComponentProps } from 'react-router-dom'
import menuTree, { IMenuTree } from '@/config/routes'

const Menus: React.FC<RouteComponentProps> = props => {
  const { location, history } = props

  function handleNavClick({ key }: any) {
    history.push(key)
  }

  function hasChild(route: IMenuTree) {
    return Array.isArray(route.children) && route.children.length > 0
  }

  function genSubMenu(route: IMenuTree) {
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
        {genMenus(route.children!)}
      </Menu.SubMenu>
    )
  }

  function genMenuItem(route: IMenuTree) {
    return (
      <Menu.Item key={route.path}>
        {route.icon && <Icon type={route.icon} />}
        <span>{route.name}</span>
      </Menu.Item>
    )
  }

  function genMenus(routes: IMenuTree[]) {
    return routes.reduce((prev: any, next: any) => {
      return prev.concat(
        hasChild(next)
          ? genSubMenu(next)
          : genMenuItem(next)
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
      {genMenus(menuTree)}
    </Menu>
  )
}

export default withRouter(Menus)
