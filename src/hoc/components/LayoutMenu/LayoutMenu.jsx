import './styles.scss';
import { Drawer, Menu } from 'antd';
import { useState, useEffect } from 'react';
import { routeNames } from '../../../config';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import BaseButton from '../../../components/Buttons/BaseButtons/BaseButton';
import { EllipsisOutlined, MenuOutlined } from '@ant-design/icons';

const items = [
  {
    label: 'Home',
    key: routeNames.Home,
  },
  {
    label: 'How it work',
    key: routeNames.HowItWork,
  },
  {
    label: 'Find tutors',
    key: routeNames.FindTutor,
  },
  {
    label: 'Contact Us',
    key: routeNames.ContactUs,
  },
  {
    label: <BaseButton type="primary">Get started</BaseButton>,
    key: routeNames.Login,
  },
];

const LayoutMenu = () => {
  const [current, setCurrent] = useState(routeNames.Home);
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    setCurrent(location.pathname);
  }, [location.pathname]);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  const onClick = e => {
    navigate(e.key);
    setCurrent(e.key);
    if (collapsed) {
      toggleCollapsed();
    }
  };

  return (
    <div className="layout-menu">
      <Link to="/" style={{ color: 'black' }}>
        LOGO
      </Link>
      <Menu
        onClick={onClick}
        overflowedIndicator={<EllipsisOutlined />}
        disabledOverflow={true}
        selectedKeys={[current]}
        mode="horizontal"
        items={items}
        className="layout-menu-nav-link"
      />
      <MenuOutlined className="layout-menu-drawer" onClick={toggleCollapsed} />
      <Drawer placement="left" closable={false} onClose={toggleCollapsed} open={collapsed} bodyStyle={{ padding: 0 }}>
        <Menu
          onClick={onClick}
          mode="vertical"
          selectedKeys={[current]}
          items={items}
          className="layout-menu-drawer-nav-link"
        />
      </Drawer>
    </div>
  );
};

export default LayoutMenu;
