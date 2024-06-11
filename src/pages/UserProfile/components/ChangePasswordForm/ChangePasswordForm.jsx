import { Card, Col, Divider, Form, Input, Row, notification } from 'antd';
import { SubHeading } from '../../../../components/Typography/SubHeading/SubHeading';
import { PASSWORD_REGEX } from '../../../../constants/auth.constant';
import BaseButton from '../../../../components/Buttons/BaseButtons/BaseButton';
import { authActions, changePassword } from '../../../../store/features/auth.slice';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

const ChangePasswordForm = ({ dispatch }) => {
  const [form] = Form.useForm();
  const { success, loading, error } = useSelector(state => state.auth);

  const onFinish = async values => {
    const { password } = values;
    await dispatch(changePassword({ password })).unwrap();
    form.resetFields();
  };
  useEffect(() => {
    if (success) {
      notification.success({
        message: 'Change Password',
        description: 'Password changed successfully',
      });
      dispatch(authActions.clearSuccess());
    }
  }, [success]);
  useEffect(() => {
    if (error) {
      notification.error({
        message: 'Error',
        description: error || 'Failed to change password',
      });
      dispatch(authActions.clearError());
    }
  }, [error]);
  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };
  return (
    <>
      <Card>
        <SubHeading strong>Change Password</SubHeading>
        <Divider />
        <Form onFinish={onFinish} onFinishFailed={onFinishFailed} form={form} layout="vertical">
          <Row gutter={[16, 4]} justify="center">
            <Col xs={24} lg={12}>
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
            </Col>
            <Col xs={24} lg={12}>
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
            </Col>
            <Form.Item>
              <BaseButton type="primary" size="large" htmlType="submit" disabled={loading} loading={loading}>
                {loading ? 'Changing..' : 'Change'}
              </BaseButton>
            </Form.Item>
          </Row>
        </Form>
      </Card>
    </>
  );
};

export default ChangePasswordForm;
