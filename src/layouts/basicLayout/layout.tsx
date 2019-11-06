import React from 'react'
import { RouteComponentProps } from 'react-router-dom'
import { Layout } from 'antd';
import SideMenu from './sideMenu'
import PageContent from './pageContent'

import './index.scss'

const { Header, Footer, Sider, Content } = Layout;

const BasicLayout: React.FC<RouteComponentProps> = props => {
  return <div className="basic-layout">
    <Layout>
      <Sider><SideMenu /></Sider>
      <Layout>
        <Header>TS-Admin</Header>
        <Content>
          <PageContent {...props}/>
        </Content>
        <Footer>copyright.</Footer>
      </Layout>
    </Layout>
  </div>
}

export default BasicLayout
