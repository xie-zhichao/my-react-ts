import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Home, About, Topics } from './pages/index';
import LoginPage from './pages/login';


export default () => (
  <Router>
    <>
      <Route exact path="/" component={Home} />
      <Route path="/login" component={LoginPage} />
      <Route path="/about" component={About} />
      <Route path="/topics" component={Topics} />
    </>
  </Router>
);
