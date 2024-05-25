import './styles.scss'
import { Space, Layout as AntdLayout } from 'antd'
import React from 'react'
import LayoutFooter from './components/LayoutFooter/LayoutFooter'
import LayoutMenu from './components/LayoutMenu/LayoutMenu'

const { Header, Content } = AntdLayout
const Layout = ({ children }) => {
  return (
    <Space direction='vertical' style={{ width: '100%' }} size={[0, 48]}>
      <AntdLayout>
        <Header className='layout-header'>
          <LayoutMenu />
        </Header>
        <Content style={{ background: 'white', paddingBottom: 100 }}>
          {children}
        </Content>
        <LayoutFooter />
      </AntdLayout>
    </Space>
  )
}

export default Layout
