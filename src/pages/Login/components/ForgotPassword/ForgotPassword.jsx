import { UserOutlined } from '@ant-design/icons';
import { Form, Input, notification } from 'antd';
import BaseButton from '../../../../components/Buttons/BaseButtons/BaseButton';
import { requestResetPassword } from '../../../../store/features/auth.slice';

const ForgotPassword = ({ onRegister, onLogin, dispatch }) => {
  const [form] = Form.useForm();
  const onFinish = async values => {
    const { email } = values;
    try {
      await dispatch(requestResetPassword({ email })).unwrap();
      notification.success({
        message: 'Send mail',
        description: 'An email from the system has been sent successfully.',
      });
      form.resetFields();
    } catch (error) {
      notification.error({
        message: 'Error',
        description: 'Failed to reset password',
      });
    }
  };
  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };
  return (
    <>
      <Form onFinish={onFinish} onFinishFailed={onFinishFailed} form={form}>
        <Form.Item
          name="email"
          rules={[
            {
              required: true,
              message: 'Please input your Email for password reset!',
            },
          ]}>
          <Input
            size="large"
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Email for password reset"
          />
        </Form.Item>
        <Form.Item>
          <BaseButton type="primary" size="large" htmlType="submit">
            Submit
          </BaseButton>
        </Form.Item>
        <div className="join-section">
          <p onClick={onLogin}>Sign In</p>
          <p onClick={onRegister}>Join us today</p>
        </div>
      </Form>
    </>
  );
};

export default ForgotPassword;
