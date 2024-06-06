import { Card, Col, Divider, Form, Input, Row } from 'antd';
import BaseButton from '../../../../components/Buttons/BaseButtons/BaseButton';
import { SubHeading } from '../../../../components/Typography/SubHeading/SubHeading';

const ProfileForm = () => {
  const [form] = Form.useForm();
  const onFinish = values => {
    console.log('Success:', values);
  };
  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };
  return (
    <Card>
      <SubHeading strong>Profile form</SubHeading>
      <Divider />
      <Form onFinish={onFinish} onFinishFailed={onFinishFailed} form={form} layout="vertical">
        <Row gutter={[16, 4]} justify="center">
          <Col xs={24} lg={12}>
            <Form.Item
              label="First name"
              name="fn"
              rules={[
                {
                  required: true,
                  message: 'Please input your first name!',
                },
              ]}>
              <Input size="large" placeholder="Enter your first name" />
            </Form.Item>
          </Col>
          <Col xs={24} lg={12}>
            <Form.Item
              label="Last name"
              name="ln"
              rules={[
                {
                  required: true,
                  message: 'Please input your last name!',
                },
              ]}>
              <Input size="large" placeholder="Enter your last name" />
            </Form.Item>
          </Col>
          <Col xs={24} lg={12}>
            <Form.Item
              label="Email"
              name="email"
              rules={[
                {
                  required: true,
                  message: 'Please input your email!',
                },
              ]}>
              <Input size="large" placeholder="nmthanh.1906@gmail.com" disabled />
            </Form.Item>
          </Col>
          <Col xs={24} lg={12}>
            <Form.Item
              label="Mobile phone"
              name="mobile phone"
              rules={[
                {
                  required: true,
                  message: 'Please input your mobile phone!',
                },
              ]}>
              <Input size="large" placeholder="Enter your mobile phone" />
            </Form.Item>
          </Col>
          <Form.Item>
            <BaseButton type="primary" htmlType="submit">
              Save
            </BaseButton>
          </Form.Item>
        </Row>
      </Form>
    </Card>
  );
};

export default ProfileForm;
