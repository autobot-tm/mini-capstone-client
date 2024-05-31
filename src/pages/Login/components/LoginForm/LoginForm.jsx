import { ArrowRightOutlined, LockOutlined, UserOutlined } from '@ant-design/icons';
import { Divider, Form, Input, notification } from 'antd';
import BaseButton from '../../../../components/Buttons/BaseButtons/BaseButton';
import { Caption } from '../../../../components/Typography/Caption/Caption';
import { useDispatch, useSelector } from 'react-redux';
import { clearError, selectError, selectLoading, selectUser, signIn } from '../../../../store/features/auth.slice';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const LoginForm = ({ onRegister }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector(selectUser);
  const token = user?.token;
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const [api, contextHolder] = notification.useNotification();

  const onFinish = values => {
    dispatch(signIn(values));
    dispatch(clearError());
  };
  useEffect(() => {
    if (error) {
      api.error({
        type: 'error',
        message: 'Phone number or password invalid!',
      });
    }
    dispatch(clearError());
  }, [error]);
  useEffect(() => {
    if (token) {
      navigate('/');
    }
  }, [token, navigate]);

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
          name="phone"
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
          <BaseButton type="primary" size="large" htmlType="submit" disabled={loading} loading={loading}>
            {loading ? 'Submitting' : 'Submit'} <ArrowRightOutlined />
          </BaseButton>
        </Form.Item>
        <Divider>OR</Divider>
        <Caption onClick={onRegister} style={{ cursor: 'pointer' }} classNames="primary-color" strong>
          Join us today
        </Caption>
      </Form>
    </>
  );
};

export default LoginForm;
