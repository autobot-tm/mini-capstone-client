import React from 'react';
import { Row, Col } from 'antd';
import { SmileOutlined, SafetyOutlined, LikeOutlined } from '@ant-design/icons';
import './styles.scss';
import Paragraph from 'antd/es/typography/Paragraph';

const WorkSection = () => {
    return (
        <section className="ant-section ant-top-section" style={{ width: '100%' }}>
            <div className="ant-container">
                <Row className="ant-top-column">
                    <Col span={24}>
                        <div className="main-title">
                            <img decoding="async" src="https://demos.wp-guppy.com/tuturn/wp-content/plugins/tuturn/public/images/zigzag-line.svg" alt="zigzag-line" />
                            <h4>Why our working is so unique</h4>
                            <h2>See how our working process easily adapt your need</h2>
                        </div>
                        <ul className="processing-list">
                            <li>
                                <div className="processing-list-info">
                                    <LikeOutlined className="icon-green" />
                                    <h4>User friendly hiring process</h4>
                                </div>
                                <Paragraph>Aeccusamus etmaes iusto odiomae dignissimos ducimus quistames blanditiis praesentium voluptatum loramkes anuten.</Paragraph>
                            </li>
                            <li>
                                <div className="processing-list-info">
                                    <SafetyOutlined className="icon-orange" />
                                    <h4>Verified process with ease</h4>
                                </div>
                                <Paragraph>Aeccusamus etmaes iusto odiomae dignissimos ducimus quistames blanditiis praesentium voluptatum loramkes anuten.</Paragraph>
                            </li>
                            <li>
                                <div className="processing-list-info">
                                    <SmileOutlined className="icon-purple" />
                                    <h4>Secure payment gateway integrated</h4>
                                </div>
                                <Paragraph>Aeccusamus etmaes iusto odiomae dignissimos ducimus quistames blanditiis praesentium voluptatum loramkes anuten.</Paragraph>
                            </li>
                        </ul>
                    </Col>
                </Row>
            </div>
        </section>
    );
};

export default WorkSection;
