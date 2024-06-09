import { Card, Col, Divider, Form, Input, Row, notification } from 'antd';
import BaseButton from '../../../../components/Buttons/BaseButtons/BaseButton';
import { SubHeading } from '../../../../components/Typography/SubHeading/SubHeading';
import { useDispatch, useSelector } from 'react-redux';
import { validateFullName, validatePhoneNumber } from '../../../../utils/validate-form';
import { PHONE_NUMBER } from '../../../../constants/auth.constant';
import { updateUserProfile } from '../../../../store/features/user.slice';

const ProfileForm = () => {
  const [api, contextHolder] = notification.useNotification();
  const user = useSelector(state => state.auth.user);
  const dispatch = useDispatch();
  const [form] = Form.useForm();

  const onFinish = values => {
    const { fullname, phone } = values;
    try {
      const email = user?.email;
      const id = user?.id;
      dispatch(updateUserProfile({ id, email, fullname, phone }));
      api.success({
        message: 'Saved successfully!',
      });
    } catch (error) {
      console.error(error);
    }
  };
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
              label="First name"
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
              <BaseButton style={{ width: 'auto' }} type="primary" htmlType="submit">
                Save
              </BaseButton>
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </Card>
  );
};

export default ProfileForm;
