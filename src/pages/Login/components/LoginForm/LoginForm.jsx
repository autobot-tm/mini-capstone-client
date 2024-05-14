import { ArrowRightOutlined, LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Divider, Form, Input } from 'antd';

const LoginForm = ({ onRegister }) => {
  const onFinish = values => {
    console.log('Received values of form: ', values);
  };

  return (
    <>
      {' '}
      <Form
        name="normal_login"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}>
        <Form.Item
          name="username"
          rules={[
            {
              required: true,
              message: 'Please input your Username!',
            },
          ]}>
          <Input size="large" prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: 'Please input your Password!',
            },
          ]}
          hasFeedback>
          <Input.Password
            size="large"
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>

        <Form.Item>
          <Button size="large" type="primary" htmlType="submit" className="login-form-button">
            Submit <ArrowRightOutlined />
          </Button>
          <Divider>OR</Divider>
          <a onClick={onRegister} style={{ color: '#6A307D', fontWeight: 'bold' }}>
            Join us today
          </a>
        </Form.Item>
      </Form>
    </>
  );
};

export default LoginForm;
