import React from 'react'
import { RouteComponentProps } from 'react-router-dom'
import { Layout } from 'antd';
import SideMenu from './sideMenu'
import PageContent from './pageContent'

import './index.scss'

const { Header, Footer, Sider, Content } = Layout;

const BasicLayout: React.FC<RouteComponentProps> = props => {
  const { history } = props

  const logo = () => {
    return (
      <div className="header-logo" onClick={() => history.push('/')}>
        TS-Admin
      </div>
    )
  }

  return <div className="basic-layout">
    <Layout>
      <Sider>
        {logo()}
        <SideMenu />
      </Sider>
      <Layout>
        <Header>TS-Admin</Header>
        <Content>
          <PageContent {...props}/>
        </Content>
        <Footer style={{textAlign: 'center'}}>copyright 2019. TS-Admin</Footer>
      </Layout>
    </Layout>
  </div>
}

export default BasicLayout
