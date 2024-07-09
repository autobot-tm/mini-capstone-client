import './styles.scss';
import { Space, Layout as AntdLayout } from 'antd';
import LayoutFooter from './components/LayoutFooter/LayoutFooter';
import LayoutMenu from './components/LayoutMenu/LayoutMenu';
import CopyrightFooter from './components/LayoutFooter/CoppyrightFooter/CopyrightFooter';

const { Header, Content } = AntdLayout;
const Layout = ({ children }) => {
  return (
    <Space direction="vertical" style={{ width: '100%' }} size={[0, 48]}>
      <AntdLayout>
        <Header className="layout-header">
          <LayoutMenu />
        </Header>
        <Content>{children}</Content>
        <LayoutFooter />
        <CopyrightFooter/>
      </AntdLayout>
    </Space>
  );
};

export default Layout;
