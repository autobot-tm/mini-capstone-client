import React from 'react';
import { Layout, Row, Col, Typography, List } from 'antd';
import { PhoneOutlined, MailOutlined, EnvironmentOutlined, FacebookOutlined, TwitterOutlined, InstagramOutlined } from '@ant-design/icons';
import './styles.scss';
const { Footer } = Layout;
const {  Link } = Typography;

const LayoutFooter = () => (
  <Footer className="footer">
    <div className="container">
      <Row gutter={[16, 16]} className="py-2">
        <Col md={10}>
          <div className="mb-3">
            <Link href="/">
              <img src="https://demos.wp-guppy.com/tuturn/wp-content/uploads/2022/03/logo_white-1.svg" alt="/" width="150" />
            </Link>
          </div>
          <div className="pe-md-10">
            <h2>TUTOR System - The True Learning Assistant.</h2>
            <List>
              <List.Item>
                <EnvironmentOutlined /> 2nd Floor, No. 541 Vu Tong Phan, Khuong Dinh Ward, Thanh Xuan District, Hanoi City, Vietnam
              </List.Item>
              <List.Item>
                <EnvironmentOutlined /> 29th and 30th Floors, LIM Building, 9-11 Ton Duc Thang, District 1, Ho Chi Minh City, Vietnam
              </List.Item>
              <List.Item>
                <PhoneOutlined /> Phone: <Link href="tel:0967237073">096 727 073</Link>
              </List.Item>
              <List.Item>
                <MailOutlined /> Email: <Link href="mailto:vulq72@gmail.com">tutor@gmail.com</Link>
              </List.Item>
            </List>
          </div>
        </Col>
        <Col md={10}>
          <Row gutter={[16, 16]}>
            <Col xs={12}>
              <h2 className="text-uppercase">ABOUT TUTOR</h2>
              <List>
                <List.Item>
                  <Link href="">About Us </Link>
                </List.Item>
              </List>
              <h2 className="text-uppercase">Regulations</h2>
              <List>
                
                <List.Item>
                  <Link href="/service-info">Fee and Service Policy</Link>
                </List.Item>
                <List.Item>
                  <Link href="/regulation-account">Regulations for Tutor Accounts</Link>
                </List.Item>
                <List.Item>
                  <Link href="/regulations-find">Regulations when Requesting to Find a Tutor</Link>
                </List.Item>
                <List.Item>
                  <Link href="/Privacy">Personal Information Privacy</Link>
                </List.Item>
              </List>
            </Col>
            <Col xs={12}>
              <h2 className="text-uppercase">Contact</h2>
              <List>
                <List.Item>
                  <Link href="/Tutors">Tutor List</Link>
                </List.Item>
              </List>
            </Col>
          </Row>
        </Col>
        <Col md={4}>
          <h2 className="text-uppercase">Contact US</h2>
          <div className="mt-5">
            <Link href="#!" className="icon-shape icon-sm social-links">
              <FacebookOutlined />
            </Link>
            <Link href="#!" className="icon-shape icon-sm social-links">
              <TwitterOutlined />
            </Link>
            <Link href="#!" className="icon-shape icon-sm social-links">
              <InstagramOutlined />
            </Link>
          </div>
        </Col>
      </Row>
    </div>
   
  </Footer>
  
);

export default LayoutFooter;
