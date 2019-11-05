import React from 'react'
import { RouteComponentProps } from 'react-router-dom' 
import { Button } from 'antd'
import { login } from '../services/userService'

const Login: React.FC<RouteComponentProps> = ({ history }) => {

  async function doLogin() {
    const res = await login()
    history.replace('/home')
  }

  return <div className="login">
    <Button onClick={doLogin}>登录</Button>
  </div>
}

export default Login
