import './styles.scss';
import { Avatar, Drawer, Dropdown, Menu } from 'antd';
import { useState, useEffect } from 'react';
import { routeNames } from '../../../config';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import BaseButton from '../../../components/Buttons/BaseButtons/BaseButton';
import { EllipsisOutlined, LogoutOutlined, MenuOutlined, UserOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { signOut } from '../../../store/features/auth.slice';

const LayoutMenu = () => {
  const [current, setCurrent] = useState(routeNames.Home);
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const token = useSelector(state => state.auth.user)?.token;

  useEffect(() => {
    setCurrent(location.pathname);
  }, [location.pathname]);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  const onClick = e => {
    if (e.key === 'user') {
      return;
    }
    navigate(e.key);
    setCurrent(e.key);
    if (collapsed) {
      toggleCollapsed();
    }
  };
  const handleMenuClick = e => {
    if (e.key === 'profile') {
      navigate('/user-profile');
    } else if (e.key === 'logout') {
      dispatch(signOut());
    }
  };
  const menu = (
    <Menu onClick={handleMenuClick}>
      <Menu.Item key="profile" icon={<UserOutlined />}>
        User Profile
      </Menu.Item>
      <Menu.Item key="logout" icon={<LogoutOutlined />}>
        Logout
      </Menu.Item>
    </Menu>
  );
  const items = [
    {
      label: 'Home',
      key: routeNames.Home,
    },
    {
      label: 'How it work',
      key: 'work',
    },
    {
      label: 'Find tutors',
      key: routeNames.FindTutor,
    },
    {
      label: 'Contact Us',
      key: 'contact',
    },
    token
      ? {
          label: (
            <Dropdown overlay={menu} trigger={['click']}>
              <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=8" />
            </Dropdown>
          ),
          key: 'user',
        }
      : {
          label: <BaseButton type="primary">Get started</BaseButton>,
          key: routeNames.Login,
        },
  ];

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
