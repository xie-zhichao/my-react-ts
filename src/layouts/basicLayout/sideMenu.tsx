import React from 'react'
import { Icon, Menu } from 'antd'
import { withRouter, RouteComponentProps } from 'react-router-dom'
import menuTree, { hasChild } from '@/config/routes'

const SideMenu: React.FC<RouteComponentProps> = props => {
  const { location, history } = props

  function handleNavClick({ key }: any) {
    history.push(key)
  }

  function genSubMenu(menu: IMenuTree, prePath: string) {
    const fullPath = `${prePath}${menu.path}`
    return (
      <Menu.SubMenu
        title={
          <span>
            {menu.icon && <Icon type={menu.icon} />}
            <span>{menu.name}</span>
          </span>
        }
        key={fullPath}
      >
        {genMenus(menu.children!, fullPath)}
      </Menu.SubMenu>
    )
  }

  function genMenuItem(menu: IMenuTree, prePath: string) {
    return (
      <Menu.Item key={`${prePath}${menu.path}`}>
        {menu.icon && <Icon type={menu.icon} />}
        <span>{menu.name}</span>
      </Menu.Item>
    )
  }

  function genMenus(menus: IMenuTree[], prePath = '') {
    const genMenu = (menu: IMenuTree): React_Node => hasChild(menu)
      ? (menu.hideChildrenInMenu ? genMenuItem(menu, prePath)
        : genSubMenu(menu, prePath)) :
      genMenuItem(menu, prePath)

    return menus.reduce<React_Node[]>(
      (prev: React_Node[], next: IMenuTree) => prev.concat(next.hideInMenu ? undefined : genMenu(next))
      , [])
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

export default withRouter(SideMenu)
