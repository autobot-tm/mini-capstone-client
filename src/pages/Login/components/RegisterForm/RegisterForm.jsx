import { Divider, Form, Input } from 'antd';
import { Caption } from '../../../../components/Typography/Caption/Caption';
import BaseButton from '../../../../components/Buttons/BaseButtons/BaseButton';

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
        <Form.Item>
          <BaseButton size="large" htmlType="submit" disabled="" loading="">
            Register
          </BaseButton>
        </Form.Item>
        <Divider>OR</Divider>
        <Caption onClick={onLogin} style={{ cursor: 'pointer' }} classNames="primary-color" strong>
          Sign in
        </Caption>
      </Form>
    </>
  );
};

export default RegisterForm;
