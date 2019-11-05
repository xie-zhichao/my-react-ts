import React from 'react'
import { Switch, Route, Redirect, RouteComponentProps } from 'react-router-dom'
import { Layout } from 'antd';
import SideMenu from './sideMenu'
import Home from '../../pages/home'
import Topics from '../../pages/topics'
import About from '../../pages/about'

import './index.scss'

const { Header, Footer, Sider, Content } = Layout;

const BasicLayout: React.FC<RouteComponentProps> = ({ match }) => {
  return <div className="basic-layout">
    <Layout>
      <Sider><SideMenu /></Sider>
      <Layout>
        <Header>TS-Admin</Header>
        <Content>
          <Switch>
            <Route path={`${match.path}`} exact component={Home} />
            <Route path={`${match.path}/topics`} component={Topics} />
            <Route path={`${match.path}/about`} component={About} />
            <Redirect to={`${match.url}`} />
          </Switch>
        </Content>
        <Footer>copyright.</Footer>
      </Layout>
    </Layout>
  </div>
}

export default BasicLayout
