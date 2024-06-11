import { ArrowRightOutlined, LockOutlined, UserOutlined } from '@ant-design/icons';
import { Divider, Form, Input, notification } from 'antd';
import BaseButton from '../../../../components/Buttons/BaseButtons/BaseButton';
import { signIn, useAuthSlice } from '../../../../store/features/auth.slice';
import { useEffect } from 'react';
import GoogleSignInButton from '../../../../components/GoogleSignIn/GoogleSignInButton';

const LoginForm = ({ onRegister, dispatch, loading, error, success, onForgotPassword }) => {
  const [api, contextHolder] = notification.useNotification();
  const { actions: authActions } = useAuthSlice();

  const onFinish = values => {
    dispatch(signIn(values));
  };
  useEffect(() => {
    if (success) {
      dispatch(authActions.clearSuccess());
    }
  }, [success, dispatch]);
  useEffect(() => {
    if (error) {
      api.error({
        type: 'error',
        message: error,
      });
      dispatch(authActions.clearError());
    }
  }, [error, dispatch]);

  return (
    <>
      {contextHolder}
      <Form
        name="normal_login"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}>
        <Form.Item
          name="email"
          rules={[
            {
              required: true,
              message: 'Please input your Email!',
            },
          ]}>
          <Input size="large" prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Email" />
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
          <BaseButton type="primary" size="large" htmlType="submit" disabled={loading} loading={loading}>
            {loading ? 'Submitting' : 'Submit'} <ArrowRightOutlined />
          </BaseButton>
        </Form.Item>
        <div className="join-section">
          <p onClick={onRegister}>Join us today</p>
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

export default LoginForm;
