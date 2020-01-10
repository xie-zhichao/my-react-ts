import React, { useContext } from 'react'
import { Route, Redirect, RouteProps, RouteComponentProps } from 'react-router-dom'
import { UserContext } from '@/models/user'

interface IAuthorizedRouteProps extends RouteProps {
  redirect?: string;
};

const AuthorizedRoute: React.FC<PickRequired<IAuthorizedRouteProps, 'component'>> = props => {
  const { user } = useContext(UserContext)
  const { logged } = user
  const { component: Component, redirect, ...rest } = props

  const renderComponent = (props: RouteComponentProps) => {
    return logged
      ? <Component {...props} />
      : <Redirect to={`${redirect || '/auth/login'}`} />
  }

  return (
    <Route
     {...rest} 
     render={renderComponent} />
  )
}

export default AuthorizedRoute
