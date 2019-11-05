import React from 'react';
import { Route, Redirect, RouteProps, RouteComponentProps } from 'react-router-dom';
import { connect } from 'react-redux';

interface AuthorizedRouteProps extends RouteProps {
  pending: boolean,
  logged: boolean,
  component: React.FC<RouteComponentProps>
};

const AuthorizedRoute: React.FC<PickRequired<AuthorizedRouteProps, 'component'>> = props => {

  const { component: Component, pending, logged, ...rest } = props

  const renderComponent = (props: RouteComponentProps) => {
    if (pending) return <div>Loading...</div>
    return logged
      ? <Component {...props} />
      : <Redirect to="/auth/login" />
  }

  return (
    <Route
     {...rest} 
     render={renderComponent} />
  )
}

const stateToProps = ({ loggedUserState }: BaseProps) => ({
  pending: loggedUserState.pending,
  logged: loggedUserState.logged
})

export default connect(stateToProps)(AuthorizedRoute)
