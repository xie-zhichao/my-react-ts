import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

interface BaseProps {
  [propName: string]: any
}

interface AuthorizedRouteProps {
  component: typeof React.Component,
  pending: boolean,
  logged: boolean,
  [propName: string]: any
};

class AuthorizedRoute extends React.Component<AuthorizedRouteProps> {

  componentDidMount() {
  }

  render() {
    const { component: Component, pending, logged, ...rest } = this.props
    
    return (
      <Route {...rest} render={props => {
        if (pending) return <div>Loading...</div>
        return logged
          ? <Component {...props} />
          : <Redirect to="/auth/login" />
      }} />
    )
  }
}

const stateToProps = ({ loggedUserState }: BaseProps) => ({
  pending: loggedUserState.pending,
  logged: loggedUserState.logged
})

export default connect(stateToProps)(AuthorizedRoute)