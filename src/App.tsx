import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import AuthorizedRoute from './AuthorizedRoute';
import store from './store';

// Layouts
import basicLayout from './layouts/basicLayout'

export interface AppProps {
  [propName: string]: any
}

const App = (props: AppProps) => (
  <Provider store={store}>
    <BrowserRouter>
      <>
        <Switch>
          <Route path="/auth" component={basicLayout} />
          <AuthorizedRoute path="/app" component={basicLayout} />
          <Redirect to="/auth" />
        </Switch>
      </>
    </BrowserRouter>
  </Provider>
)

export default App;
