import { Headline } from '../../components/Typography/Headline/Headline';
import { Col, Form, Input, Row, notification } from 'antd';
import { SubHeading } from '../../components/Typography/SubHeading';
import LOGIN from '../../assets/images/Login.gif';
import { PASSWORD_REGEX } from '../../constants/auth.constant';
import BaseButton from '../../components/Buttons/BaseButtons/BaseButton';
import { useNavigate } from 'react-router-dom';
import { changePasswordService } from '../../services/apis/auth.service';

const ResetPassword = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const [api, contextHolder] = notification.useNotification();
  const onFinish = async values => {
    const { password } = values;
    try {
      await changePasswordService({ password });
      api.success({
        message: 'Change Password',
        description: 'Password changed successfully',
      });
      setTimeout(() => {
        navigate('/login');
      }, 1000);
      form.resetFields();
    } catch (error) {
      console.log(error);
    }
  };
  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };
  return (
    <>
      {contextHolder}
      <Row id="login-page">
        <Col xs={12} className="bg-image">
          <img src={LOGIN} alt="" />
        </Col>
        <Col xs={12} className="bg-login">
          <div className="login-form">
            <Headline size={360} classNames="primary-color" strong>
              Welcome!
            </Headline>
            <SubHeading strong style={{ marginBottom: 20 }}>
              It is really nice to see you
            </SubHeading>
            <Form onFinish={onFinish} onFinishFailed={onFinishFailed} form={form} layout="vertical">
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
                <Input.Password placeholder="New Password" size="large" />
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
                <BaseButton type="primary" size="large" htmlType="submit">
                  Change
                </BaseButton>
              </Form.Item>
            </Form>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default ResetPassword;
