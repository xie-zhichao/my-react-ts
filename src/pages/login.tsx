import React, { useContext } from 'react'
import { RouteComponentProps } from 'react-router-dom' 
import { Button } from 'antd'
import { login } from '../services/userService'
import { UserContext, LOG_IN, IUserState } from '@/models/user'

const Login: React.FC<RouteComponentProps> = ({ history }) => {
  const { dispatch } = useContext(UserContext)

  async function doLogin() {
    const res = await login()
    dispatch({
      type: LOG_IN,
      payload: res as IUserState
    })
    history.replace('/home')
  }

  return <div className="login">
    <Button onClick={doLogin}>登录</Button>
  </div>
}

export default Login
