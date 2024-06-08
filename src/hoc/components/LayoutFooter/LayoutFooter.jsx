import React from 'react';
import { Layout, Row, Col, Typography } from 'antd';
import { FacebookOutlined, YoutubeOutlined, GoogleOutlined } from '@ant-design/icons';
import './styles.scss';

const { Footer } = Layout;
const { Title, Text } = Typography;

const LayoutFooter = () => {
  return (
    <Footer className="footer">
      <Row className="footer-item" gutter={[16, 16]}>
        <Col span={8} className="footer-left">
          <Title level={2} className="cpn-name">Company Name</Title>
          <Text className="web-name">Web Name</Text>
          <div className="text">
          Learning is a treasure that will follow its owner everywhere
          </div>
          <Title level={4} className="web-contact">Social Contact</Title>
          <div className="icon" style={{ color: "white" }}>
            <FacebookOutlined />
            <YoutubeOutlined />
            <GoogleOutlined  />
          </div>
        </Col>
        <Col span={8} className="footer-m">
          <Title level={4} className="location-name">Hanoi</Title>
          <div className='text'>
          7th, 15th, and 20th Floors, Capital Building - 109 Tran Hung Dao, Hoan Kiem District, Hanoi, Vietnam
          </div>
          <Title level={4} className="location-name">Ho Chi Minh City</Title>
          <div className='text'>
          29th and 30th Floors, LIM Building, 9-11 Ton Duc Thang, District 1, Ho Chi Minh City, Vietnam
          </div>
        </Col>
        <Col span={8} className="footer-r">
          <Title level={4} className="location-name">Gò Vấp District Tutoring Office</Title>
          <div className='text'>
          672A28, Phan Van Tri Street, Ward 10, Go Vap District, CityLand Park Hill Area
          </div>
          <Title level={4} className="location-name">Gia Su Dat Viet Office, Go Vap District</Title>
          <div className='text'>
          672A28, Phan Van Tri Street, Ward 10, Go Vap District, CityLand Park Hill Area, Ho Chi Minh City, Vietnam
          </div>
        </Col>
      </Row>
    </Footer>
  );
};

export default LayoutFooter;
