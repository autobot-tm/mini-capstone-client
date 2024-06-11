import { Divider, Form, Input, notification } from 'antd';
import BaseButton from '../../../../components/Buttons/BaseButtons/BaseButton';
import { useAuthSlice } from '../../../../store/features/auth.slice';
import { PASSWORD_REGEX, PHONE_NUMBER } from '../../../../constants/auth.constant';
import GoogleSignInButton from '../../../../components/GoogleSignIn/GoogleSignInButton';
import { validateFullName, validatePhoneNumber } from '../../../../utils/validate-form';
import { useEffect } from 'react';

const RegisterForm = ({ onLogin, dispatch, loading, error, success, onForgotPassword }) => {
  const [api, contextHolder] = notification.useNotification();
  const { actions: authActions } = useAuthSlice();
  const onFinish = values => {
    dispatch(authActions.signUp(values));
  };
  useEffect(() => {
    if (error) {
      api.error({
        message: 'Error',
        description: error || 'Failed to register',
      });
      dispatch(authActions.clearError());
    }
  }, [error]);

  useEffect(() => {
    if (success) {
      api.success({
        message: 'Register Successful!',
      });
      dispatch(authActions.clearSuccess());
      setTimeout(() => {
        onLogin();
      }, 1000);
    }
  }, [success]);
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
          name="fullname"
          rules={[
            {
              validator: validateFullName,
            },
          ]}>
          <Input placeholder="Full Name" size="large" />
        </Form.Item>
        <Form.Item
          name="phone"
          rules={[
            {
              validator: validatePhoneNumber,
            },
            {
              pattern: PHONE_NUMBER.VALID_LENGTH,
              message: 'Phone number must have 10 or 11 digits!',
            },
          ]}>
          <Input placeholder="Phone Number" size="large" />
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
        <div className="join-section">
          <p onClick={onLogin}>Sign In</p>
          <p onClick={onForgotPassword}>Forgot password?</p>
        </div>
        <Divider>OR</Divider>
        <span className="google-btn-container">
          <GoogleSignInButton />
        </span>
      </Form>
    </>
  );
};

export default RegisterForm;
