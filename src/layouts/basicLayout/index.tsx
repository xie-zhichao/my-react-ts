import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import { UserProvider } from '@/models/user'
import AuthorizedRoute from '@/components/AuthorizedRoute'
import Layout from './layout'
import Login from '@/pages/login'
import SessionStorePersister from '@/common/store/sessionStorePersister'

const App: React.FC = props => ( 
  <UserProvider persister={SessionStorePersister}>
    <BrowserRouter>
        <Switch>
          <Route path="/auth/login" component={Login} />
          <AuthorizedRoute path="/" component={Layout} />
          <Redirect to="/auth/login" />
        </Switch>
    </BrowserRouter>
  </UserProvider>
)

export default App
