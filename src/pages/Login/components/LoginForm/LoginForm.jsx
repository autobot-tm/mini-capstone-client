import { ArrowRightOutlined, LockOutlined, UserOutlined } from '@ant-design/icons';
import { Divider, Form, Input } from 'antd';
import BaseButton from '../../../../components/Buttons/BaseButtons/BaseButton';
import { Caption } from '../../../../components/Typography/Caption/Caption';

const LoginForm = ({ onRegister }) => {
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
          <BaseButton type="primary" size="large" htmlType="submit" disabled="" loading="">
            Submit <ArrowRightOutlined />
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
