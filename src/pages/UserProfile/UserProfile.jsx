import './styles.scss';
import { Avatar, Card, Col, Divider, Menu, Row } from 'antd';
import Layout from '../../hoc/Layout';
import { Caption } from '../../components/Typography/Caption/Caption';
import ServiceForm from './components/ServiceForm/ServiceForm';
import { SubHeading } from '../../components/Typography/SubHeading/SubHeading';
import ProfileForm from './components/ProfileForm/ProfileForm';
import { useState } from 'react';
import ChangePasswordForm from './components/ChangePasswordForm/ChangePasswordForm';
import { useDispatch, useSelector } from 'react-redux';

const UserProfile = () => {
  const user = useSelector(state => state.auth.user);
  const role = user?.role;
  const dispatch = useDispatch();
  const [selectedKey, setSelectedKey] = useState('1');
  const items = [
    {
      key: '1',
      label: 'Edit Profile',
    },
    role === 'TUTOR' && {
      key: '2',
      label: 'Service',
    },
    {
      key: '3',
      label: 'Change Password',
    },
  ];
  const handleMenuClick = e => {
    setSelectedKey(e.key);
  };
  return (
    <Layout>
      <div className="user-profile-page">
        <div className="container">
          <Row justify="center" gutter={[24, 24]}>
            <Col xs={24} lg={6}>
              <Card>
                <span className="user-profile-left">
                  <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=8" className="user-avatar" />
                  <SubHeading strong>{user?.fullname}</SubHeading>
                  <Caption>{user?.email}</Caption>
                  <Divider dashed />
                  <Menu
                    style={{
                      width: '100%',
                    }}
                    defaultSelectedKeys={['1']}
                    mode="vertical"
                    items={items}
                    onClick={handleMenuClick}
                  />
                </span>
              </Card>
            </Col>
            <Col xs={24} lg={18}>
              {selectedKey === '1' && <ProfileForm />}
              {selectedKey === '2' && role === 'TUTOR' && <ServiceForm />}
              {selectedKey === '3' && <ChangePasswordForm dispatch={dispatch} />}
            </Col>
          </Row>
        </div>
      </div>
    </Layout>
  );
};

export default UserProfile;
