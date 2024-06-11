import React from 'react';
import { Form, Input, Button, Typography, message } from 'antd';
import './styles.scss';
import Layout from '../../hoc/Layout';
const { Title } = Typography;
const { TextArea } = Input;

const ContactUs = () => {
  const onFinish = (values) => {
    console.log('Received values of form: ', values);
    // Handle form submission, e.g., send data to server

    // Show success message
    message.success('Form submitted successfully!');
  };

  return (
    <Layout>
      
    <div className="contact-us-container">
      <h1 className="contact-title">Contact Us</h1>
      
      <Form
        name="contact_us"
        onFinish={onFinish}
        layout="vertical"
        className="contact-form"
      >
        <Form.Item
          name="name"
          label="Name"
          rules={[
            { required: true, message: 'Please enter your name' },
            { min: 2, message: 'Name must be at least 2 characters' },
            { max: 50, message: 'Name cannot exceed 50 characters' },
            { pattern: /^[a-zA-Z\s]*$/, message: 'Name can only contain letters and spaces' }
          ]}
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
          rules={[
            { required: true, message: 'Please enter your message' },
            { max: 500, message: 'Message cannot exceed 500 characters' }
          ]}
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
    </Layout>
  );
};

export default ContactUs;
