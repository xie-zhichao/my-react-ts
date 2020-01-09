import React, { useContext } from 'react'
import { Menu, Dropdown, Icon } from 'antd'
import { UserContext, LOG_OUT, initialState } from '@/models/user'

interface IHeaderProps extends IBaseProps {
  collapsed: boolean;
  setCollaped: StateSetter<boolean>;
}

const Header: React.FC<IHeaderProps> = ({ collapsed, setCollaped }) => {
  const { user } = useContext(UserContext)
  const { dispatch } = useContext(UserContext)

  const logout = () => {
    dispatch({
      type: LOG_OUT,
      payload: initialState
    })
  }

  const userMenuRender = () => {
    return <Menu>
      <Menu.Item>
        <div className="menu-action" onClick={logout}>
          <Icon type="logout" />
          <span>注销</span>
        </div>
      </Menu.Item>
    </Menu>
  }

  return <div className="layout-header">
    <div className="side-menu-fold">
      <Icon
        className="trigger"
        type={collapsed ? 'menu-unfold' : 'menu-fold'}
        onClick={() => setCollaped(!collapsed)}
      />
    </div>
    {user.logged ?
      <Dropdown overlay={userMenuRender()}>
        <div className="user-menu">
          <Icon className="icon" type="user" />
          <span className="username">{user.userName}</span>
        </div>
      </Dropdown>
      : null}
  </div>
}

export default Header