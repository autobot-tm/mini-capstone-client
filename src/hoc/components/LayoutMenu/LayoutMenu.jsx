import './styles.scss';
import { Avatar, Drawer, Dropdown, Menu } from 'antd';
import { useState, useEffect } from 'react';
import { routeNames } from '../../../config';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import BaseButton from '../../../components/Buttons/BaseButtons/BaseButton';
import { EllipsisOutlined, LogoutOutlined, MenuOutlined, UserOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { useAuthSlice } from '../../../store/features/auth.slice';

const LayoutMenu = () => {
  const { actions: authActions } = useAuthSlice();
  const [current, setCurrent] = useState(routeNames.Home);
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const { token } = useSelector(state => state.auth);

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
      dispatch(authActions.signOut());
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
      <Link to="/" style={{ color: 'white' }}>
      {/* <img src="../../../assets/images/logo.png"  width="200" /> */}
      <svg xmlns="http://www.w3.org/2000/svg" width="133" height="30" viewBox="0 0 133 30" fill="none" className="amsvglogo replaced-svg">
<path d="M14.7728 12H11.8182C5.2884 12 0 6.63025 0 0H14.7728V12Z" fill="#F05B8A"></path>
<path d="M26.5908 12V30C20.061 30 14.7726 24.6303 14.7726 18V12H26.5908Z" fill="#FFC649"></path>
<path d="M26.5908 12H14.7726V0L26.5908 12Z" fill="#F04A2D"></path>
<path d="M25.2918 5.65546L21.0213 1.31933C20.5413 0.831933 20.8806 0 21.5593 0H25.8214C26.2435 0 26.5828 0.344538 26.5828 0.773109V5.10084C26.5911 5.79832 25.7718 6.14286 25.2918 5.65546Z" fill="#1C1C1C"></path>
<path d="M54.2486 4.09091V8.30787H47.9755V25.4813H43.7731V8.30787H37.5V4.09091H54.2486Z" fill="#1C1C1C"></path>
<path d="M56.2827 17.9794V10.2024H60.4851V17.9183C60.4851 18.6415 60.6323 19.2984 60.9267 19.8892C61.221 20.48 61.6321 20.9537 62.16 21.3102C62.6979 21.6565 63.3171 21.8296 64.0175 21.8296C64.7179 21.8296 65.3067 21.6565 65.7838 21.3102C66.271 20.9537 66.6415 20.48 66.8953 19.8892C67.149 19.2984 67.2759 18.6415 67.2759 17.9183V10.2024H71.4783V25.4813H67.2759V23.9076C66.7988 24.4882 66.2253 24.9669 65.5554 25.3438C64.8956 25.7207 64.1393 25.9091 63.2867 25.9091C61.8453 25.9091 60.6018 25.5526 59.5563 24.8396C58.5209 24.1266 57.719 23.1691 57.1506 21.9672C56.5822 20.7652 56.2929 19.436 56.2827 17.9794Z" fill="#1C1C1C"></path>
<path d="M83.572 14.4194H80.8313V25.4813H76.629V14.4194H74.5278V10.2024H76.629V5.40489H80.8313V10.2024H83.572V14.4194Z" fill="#1C1C1C"></path>
<path d="M86.4743 17.9794V10.2024H90.6766V17.9183C90.6766 18.6415 90.8238 19.2984 91.1182 19.8892C91.4126 20.48 91.8237 20.9537 92.3515 21.3102C92.8895 21.6565 93.5087 21.8296 94.2091 21.8296C94.9095 21.8296 95.4982 21.6565 95.9753 21.3102C96.4625 20.9537 96.833 20.48 97.0868 19.8892C97.3406 19.2984 97.4674 18.6415 97.4674 17.9183V10.2024H101.67V25.4813H97.4674V23.9076C96.9904 24.4882 96.4168 24.9669 95.7469 25.3438C95.0871 25.7207 94.3309 25.9091 93.4782 25.9091C92.0368 25.9091 90.7934 25.5526 89.7478 24.8396C88.7125 24.1266 87.9106 23.1691 87.3421 21.9672C86.7737 20.7652 86.4844 19.436 86.4743 17.9794Z" fill="#1C1C1C"></path>
<path d="M114.966 14.5111C114.692 14.3074 114.388 14.1495 114.053 14.0374C113.718 13.9152 113.347 13.8541 112.941 13.8541C112.251 13.8541 111.662 14.0323 111.175 14.3888C110.698 14.7352 110.333 15.2037 110.079 15.7945C109.835 16.3853 109.713 17.0423 109.713 17.7655V25.4813H105.481V10.2024H109.683V11.7762C110.17 11.1854 110.744 10.7117 111.404 10.3552C112.073 9.98854 112.835 9.8052 113.687 9.8052C114.033 9.8052 114.368 9.81538 114.692 9.83575C115.017 9.84594 115.332 9.89687 115.636 9.98854L114.966 14.5111Z" fill="#1C1C1C"></path>
<path d="M132.955 17.6738V25.4813H128.752V17.7349C128.752 17.0219 128.605 16.37 128.311 15.7792C128.016 15.1884 127.6 14.7148 127.062 14.3583C126.534 14.0018 125.92 13.8235 125.22 13.8235C124.529 13.8235 123.941 14.0018 123.454 14.3583C122.966 14.7148 122.596 15.1884 122.342 15.7792C122.088 16.37 121.961 17.0219 121.961 17.7349V25.4813H117.759V10.2024H121.961V11.7762C122.449 11.1752 123.022 10.6914 123.682 10.3247C124.352 9.95798 125.113 9.77464 125.966 9.77464C127.397 9.77464 128.63 10.1311 129.666 10.8442C130.711 11.5572 131.518 12.5146 132.087 13.7166C132.655 14.9083 132.944 16.2274 132.955 17.6738Z" fill="#1C1C1C"></path>
</svg>
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
