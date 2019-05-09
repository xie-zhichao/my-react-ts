import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

type LayoutProps = {
  match: string
}

const basicLayout = (props: LayoutProps) => {
  return <div className="basic-layout">
    <Switch>
      <Route path={props.match}></Route>
    </Switch>
  </div>
}

export default basicLayout;