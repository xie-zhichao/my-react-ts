import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import AuthorizedRoute from './AuthorizedRoute'
import store from './store'
import BasicLayout from './layouts/basicLayout'
import Login from './pages/login'

const App: React.FC = (props: BaseProps) => (
  <Provider store={store}>
    <BrowserRouter>
        <Switch>
          <Route path="/auth/login" component={Login} />
          <AuthorizedRoute path="/home" component={BasicLayout} />
          <Redirect to="/auth/login" />
        </Switch>
    </BrowserRouter>
  </Provider>
)

export default App
