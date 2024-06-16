import React from 'react';
import { Row, Col, Button } from 'antd';
import { RightOutlined } from '@ant-design/icons';
import './styles.scss';
import BaseButton from '../../../../components/Buttons/BaseButtons/BaseButton';

const GetStartedSection = ({onLogin}) => {
    return (
        <section className="ant-section ant-top-section">
            <div className="ant-container">
                <Row justify="center">
                    <Col xs={24} lg={16}>
                        <div className="main-title text-center">
                            <img decoding="async" src="https://demos.wp-guppy.com/tuturn/wp-content/plugins/tuturn/public/images/zigzag-line.svg" alt="We guarantee quality process" />
                            <h4>We guarantee quality process</h4>
                            <h2>Let’s join our community today</h2>
                            <p>Accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</p>
                        </div>
                        <ul className="banner-list">
                            <li>
                                <BaseButton onClick={onLogin} type="primary" className="primary-btn" >
                                    Start as Student  <RightOutlined />
                                </BaseButton>
                            </li>
                            <li>
                                <BaseButton onClick={onLogin} type="default" className="secondary-btn" >
                                    Join as Tutor 
                                </BaseButton>
                            </li>
                        </ul>
                    </Col>
                </Row>
            </div>
        </section>
    );
};

export default GetStartedSection;
