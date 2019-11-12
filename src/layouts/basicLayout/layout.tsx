import React, { useState } from 'react'
import { RouteComponentProps } from 'react-router-dom'
import { Layout, Icon } from 'antd';
import TopHeader from './header'
import SideMenu from './sideMenu'
import PageContent from './pageContent'

import './index.scss'

const { Header, Footer, Sider, Content } = Layout;

const BasicLayout: React.FC<RouteComponentProps> = props => {
  const { history } = props
  const [collapsed, setCollaped] = useState(false)

  const logo = () => {
    return (
      <div className={["header-logo", collapsed ? 'collapsed' : ''].join(' ')} onClick={() => history.push('/')}>
        <Icon className="icon" type="deployment-unit" />
        <span className="title">TS-Admin</span>
      </div>
    )
  }

  return <div className="basic-layout">
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        {logo()}
        <SideMenu />
      </Sider>
      <Layout>
        <Header>
          <TopHeader collapsed={collapsed} setCollaped={setCollaped} />
        </Header>
        <Content>
          <PageContent {...props} />
        </Content>
        <Footer style={{ textAlign: 'center' }}>copyright 2019. TS-Admin</Footer>
      </Layout>
    </Layout>
  </div>
}

export default BasicLayout
