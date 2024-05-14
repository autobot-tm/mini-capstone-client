import { Divider, Form, Input } from 'antd';

const RegisterForm = ({ onLogin }) => {
  const onFinish = values => {
    console.log('Received values of form: ', values);
  };

  return (
    <>
      <Form
        name="normal_login"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}>
        <Form.Item
          name="first_name"
          rules={[
            {
              required: true,
              message: 'Please input your first name!',
            },
          ]}>
          <Input placeholder="First Name" size="large" />
        </Form.Item>
        <Form.Item
          name="last_name"
          rules={[
            {
              required: true,
              message: 'Please input your last name!',
            },
          ]}>
          <Input placeholder="Last Name" size="large" />
        </Form.Item>
        <Form.Item
          name="email"
          rules={[
            {
              type: 'email',
              message: 'The input is not valid E-mail!',
            },
            {
              required: true,
              message: 'Please input your E-mail!',
            },
          ]}>
          <Input placeholder="Email" size="large" />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: 'Please input your password!',
            },
          ]}
          hasFeedback>
          <Input.Password placeholder="Password" size="large" />
        </Form.Item>
        <Form.Item
          name="confirm"
          dependencies={['password']}
          hasFeedback
          rules={[
            {
              required: true,
              message: 'Please confirm your password!',
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue('password') === value) {
                  return Promise.resolve();
                }
                return Promise.reject(new Error('The new password that you entered do not match!'));
              },
            }),
          ]}>
          <Input.Password placeholder="Confirm Password" size="large" />
        </Form.Item>
        <Divider>OR</Divider>
        <a onClick={onLogin} style={{ color: '#6A307D', fontWeight: 'bold' }}>
          Sign in
        </a>
      </Form>
    </>
  );
};

export default RegisterForm;
