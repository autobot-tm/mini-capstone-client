import { Divider, Form, Input, notification } from 'antd';
import { Caption } from '../../../../components/Typography/Caption/Caption';
import BaseButton from '../../../../components/Buttons/BaseButtons/BaseButton';
import { clearError, signUp } from '../../../../store/features/auth.slice';
import { useEffect } from 'react';
import { PASSWORD_REGEX } from '../../../../constants/auth.constant';

const RegisterForm = ({ onLogin, dispatch, error, loading }) => {
  const [api, contextHolder] = notification.useNotification();
  const onFinish = values => {
    dispatch(signUp(values));
  };
  useEffect(() => {
    if (error) {
      api.error({
        type: 'error',
        message: error,
      });
      dispatch(clearError());
    }
  }, [error, dispatch]);

  return (
    <>
      {contextHolder}
      <Form
        name="sign_up"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}>
        <Form.Item
          name="full_name"
          rules={[
            {
              required: true,
              message: 'Please input your full name!',
            },
          ]}>
          <Input placeholder="Full Name" size="large" />
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
            { required: true, message: 'Password is required' },
            { pattern: PASSWORD_REGEX.MIN_LENGTH, message: 'Password must be at least 8 characters' },
            {
              pattern: PASSWORD_REGEX.LOWERCASE,
              message: 'Password must contain at least one lowercase character',
            },
            {
              pattern: PASSWORD_REGEX.UPPERCASE,
              message: 'Password must contain at least one uppercase character',
            },
            {
              pattern: PASSWORD_REGEX.SPECIAL_CHARACTER,
              message: 'Password must contain at least one special character',
            },
            {
              pattern: PASSWORD_REGEX.NUMBER,
              message: 'Password must contain at least one digit',
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
            { min: 8, message: 'Password must be at least 8 characters' },
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
          <BaseButton type="primary" size="large" htmlType="submit" disabled={loading} loading={loading}>
            {loading ? 'Registering..' : 'Register'}
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
