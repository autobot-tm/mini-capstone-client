import React from 'react';
import { Form, Input, Button, Typography } from 'antd';
import './styles.scss';
const { Title } = Typography;
const { TextArea } = Input;

const ContactUs = () => {
  const onFinish = (values) => {
    console.log('Received values of form: ', values);
    // Handle form submission, e.g., send data to server
  };

  return (
    <div className="contact-us-container">
      <Title level={2} className="contact-title">Contact Us</Title>
      <Form
        name="contact_us"
        onFinish={onFinish}
        layout="vertical"
        className="contact-form"
      >
        <Form.Item
          name="name"
          label="Name"
          rules={[{ required: true, message: 'Please enter your name' }]}
        >
          <Input placeholder="Your Name" />
        </Form.Item>
        <Form.Item
          name="email"
          label="Email"
          rules={[
            { required: true, message: 'Please enter your email' },
            { type: 'email', message: 'Please enter a valid email' },
          ]}
        >
          <Input placeholder="Your Email" />
        </Form.Item>
        <Form.Item
          name="subject"
          label="Subject"
          rules={[{ required: true, message: 'Please enter a subject' }]}
        >
          <Input placeholder="Subject" />
        </Form.Item>
        <Form.Item
          name="message"
          label="Message"
          rules={[{ required: true, message: 'Please enter your message' }]}
        >
          <TextArea rows={4} placeholder="Your Message" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" className="submit-button">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default ContactUs;
