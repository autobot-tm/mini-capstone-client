import './styles.scss';
import { Avatar, Card, Col, Divider, Menu, Row, Upload } from 'antd';
import BaseButton from '../../components/Buttons/BaseButtons/BaseButton';
import Layout from '../../hoc/Layout';
import { Caption } from '../../components/Typography/Caption/Caption';
import ServiceForm from './components/ServiceForm/ServiceForm';
import { SubHeading } from '../../components/Typography/SubHeading/SubHeading';
import ProfileForm from './components/ProfileForm/ProfileForm';
import { useState } from 'react';

const UserProfile = () => {
  const [selectedKey, setSelectedKey] = useState('1');
  const items = [
    {
      key: '1',
      label: 'Edit Profile',
    },
    {
      key: '2',
      label: 'Service',
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
                  <SubHeading strong>Minh Thanh</SubHeading>
                  <Caption>nmthanh.1906@gmail.com</Caption>
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
              {selectedKey === '2' && <ServiceForm />}
            </Col>
          </Row>
        </div>
      </div>
    </Layout>
  );
};

export default UserProfile;
