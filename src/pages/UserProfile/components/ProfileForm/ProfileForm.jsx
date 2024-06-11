import { Card, Col, Divider, Form, Input, Row, notification } from 'antd';
import BaseButton from '../../../../components/Buttons/BaseButtons/BaseButton';
import { SubHeading } from '../../../../components/Typography/SubHeading/SubHeading';
import { useDispatch, useSelector } from 'react-redux';
import { validateFullName, validatePhoneNumber } from '../../../../utils/validate-form';
import { PHONE_NUMBER } from '../../../../constants/auth.constant';
import { updateUserProfile, userActions } from '../../../../store/features/user.slice';
import { useEffect } from 'react';

const ProfileForm = () => {
  const [api, contextHolder] = notification.useNotification();
  const { user, loading, success, error } = useSelector(state => state.user);
  const dispatch = useDispatch();
  const [form] = Form.useForm();

  const onFinish = values => {
    const { fullname, phone } = values;
    const id = user?.id;
    dispatch(updateUserProfile({ id, fullname, phone }));
  };
  useEffect(() => {
    if (success) {
      api.success({
        message: 'Saved successfully!',
        description: 'Updated profile successfully',
      });
      dispatch(userActions.clearSuccess());
    }
  }, [success, api, dispatch]);
  useEffect(() => {
    if (error) {
      api.error({
        message: 'Error',
        description: 'Failed to update profile',
      });
      dispatch(userActions.clearError());
    }
  }, [error, api, dispatch]);
  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };
  return (
    <Card>
      {contextHolder}
      <SubHeading strong>Profile form</SubHeading>
      <Divider />
      <Form onFinish={onFinish} onFinishFailed={onFinishFailed} form={form} layout="vertical">
        <Row gutter={[16, 4]}>
          <Col xs={24} lg={12}>
            <Form.Item
              label="Full name"
              name="fullname"
              rules={[
                {
                  validator: validateFullName,
                },
              ]}>
              <Input size="large" placeholder={user?.fullname || 'Enter your full name'} />
            </Form.Item>
          </Col>
          <Col xs={24} lg={12}>
            <Form.Item label="Email" name="email">
              <Input size="large" placeholder={user?.email} disabled />
            </Form.Item>
          </Col>
          <Col xs={24} lg={12}>
            <Form.Item
              label="Mobile phone"
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
              <Input size="large" placeholder={user?.phone || 'Enter your mobile phone'} />
            </Form.Item>
          </Col>
          <Col xs={24} style={{ display: 'flex', justifyContent: 'center' }}>
            <Form.Item>
              <BaseButton
                style={{ width: 'auto' }}
                type="primary"
                htmlType="submit"
                disabled={loading}
                loading={loading}>
                {loading ? 'Saving..' : 'Save'}
              </BaseButton>
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </Card>
  );
};

export default ProfileForm;
