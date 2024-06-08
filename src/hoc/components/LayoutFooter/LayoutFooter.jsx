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
          <Title level={2} className="cpn-name">Tên Công ty</Title>
          <Text className="web-name">Tên trang Web</Text>
          <div className="text">
            Học không biết chán, dạy người không biết mỏi.
          </div>
          <Title level={4} className="web-contact">Liên Hệ</Title>
          <div className="icon" style={{ color: "white" }}>
            <FacebookOutlined />
            <YoutubeOutlined />
            <GoogleOutlined  />
          </div>
        </Col>
        <Col span={8} className="footer-m">
          <Title level={4} className="location-name">Hà Nội</Title>
          <div className='text'>
            Tầng 7 15 & 20, Tòa nhà Capital - 109 Trần Hưng Đạo, Quận Hoàn Kiếm, Hà Nội, Việt Nam
          </div>
          <Title level={4} className="location-name">TP.Hồ Chí Minh</Title>
          <div className='text'>
            Tầng 29 & 30, Tòa nhà LIM 9-11 Tôn Đức Thắng, Quận 1, Thành phố Hồ Chí Minh, Việt Nam
          </div>
        </Col>
        <Col span={8} className="footer-r">
          <Title level={4} className="location-name">Văn phòng Gia sư Quận Gò Vấp</Title>
          <div className='text'>
            672A28, Đường Phan Văn Trị, Phường 10, Quận Gò Vấp Khu CityLand Park Hill
          </div>
          <Title level={4} className="location-name">Văn phòng Gia sư Đất Việt Quận Gò Vấp</Title>
          <div className='text'>
            672A28, Đường Phan Văn Trị, Phường 10, Quận Gò Vấp Khu CityLand Park Hill
          </div>
        </Col>
      </Row>
    </Footer>
  );
};

export default LayoutFooter;
