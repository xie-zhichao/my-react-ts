import React from 'react'
import { HashRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import { UserProvider } from '@/models/user'
import AuthorizedRoute from '@/components/AuthorizedRoute'
import Layout from './layout'
import Login from '@/pages/login'
import SessionStorePersister from '@/common/store/sessionStorePersister'

const App: React.FC = () => ( 
  <UserProvider persister={SessionStorePersister('UserModel')}>
    <Router>
        <Switch>
          <Route path="/auth/login" component={Login} />
          <AuthorizedRoute path="/" component={Layout} />
          <Redirect to="/auth/login" />
        </Switch>
    </Router>
  </UserProvider>
)

export default App
