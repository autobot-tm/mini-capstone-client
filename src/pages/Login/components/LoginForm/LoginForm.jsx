import { ArrowRightOutlined, LockOutlined, UserOutlined } from '@ant-design/icons';
import { Divider, Form, Input, notification } from 'antd';
import BaseButton from '../../../../components/Buttons/BaseButtons/BaseButton';
import { Caption } from '../../../../components/Typography/Caption/Caption';
import { clearError, signIn } from '../../../../store/features/auth.slice';
import { useEffect } from 'react';

const LoginForm = ({ onRegister, dispatch, loading, error, onForgotPassword }) => {
  const [api, contextHolder] = notification.useNotification();

  const onFinish = values => {
    dispatch(signIn(values));
  };
  useEffect(() => {
    if (error) {
      api.error({
        type: 'error',
        message: error,
      });
    }
    dispatch(clearError());
  }, [error]);

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
        <p onClick={onForgotPassword} style={{ cursor: 'pointer' }}>
          Forgot password?
        </p>
        <Divider>OR</Divider>
        <Caption onClick={onRegister} style={{ cursor: 'pointer' }} classNames="primary-color" strong>
          Join us today
        </Caption>
      </Form>
    </>
  );
};

export default LoginForm;
