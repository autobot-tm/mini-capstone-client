import { useState } from 'react';
import BaseButton from '../../../../components/Buttons/BaseButtons/BaseButton';
import ScheduleForm from '../../../../components/Schedule/ScheduleForm';
import { SubHeading } from '../../../../components/Typography/SubHeading/SubHeading';
import { classes, literacy, locationOptions, subjects } from '../../../../constants/option.constant';
import './styles.scss';
import { Button, Card, Col, Divider, Form, Input, Row, Select, Space, notification } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import { Paragraph } from '../../../../components/Typography/Paragraph/Paragraph';
import FileUploader from '../../../../components/FileUploader/FileUploader';
import VideoUploader from '../../../../components/VideoUploader/VideoUploader';

const initialSchedule = {
  morning: {
    monday: false,
    tuesday: false,
    wednesday: false,
    thursday: false,
    friday: false,
    saturday: false,
    sunday: false,
  },
  afternoon: {
    monday: false,
    tuesday: false,
    wednesday: false,
    thursday: false,
    friday: false,
    saturday: false,
    sunday: false,
  },
  evening: {
    monday: false,
    tuesday: false,
    wednesday: false,
    thursday: false,
    friday: false,
    saturday: false,
    sunday: false,
  },
};
const ServiceForm = () => {
  const [form] = Form.useForm();
  const [slotCount, setSlotCount] = useState(0);
  const [uploadedVideoUrl, setUploadedVideoUrl] = useState([]);
  const [uploadedCetificateUrl, setUploadedCetificateUrl] = useState([]);
  const [api, contextHolder] = notification.useNotification();
  const openNotification = () => {
    api.success({
      message: `Service Created Successfully`,
      description: 'Your service has been successfully created. Please wait for our review within 24 hours.',
    });
  };
  const onFinish = values => {
    console.log('Success:', values);

    const dataToSend = {
      ...values,
      certificateUrl: uploadedCetificateUrl,
      videoUrl: uploadedVideoUrl,
    };
    console.log('Data to send:', dataToSend);

    openNotification();
    form.resetFields();
  };
  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };
  const handleScheduleChange = (schedule, count) => {
    form.setFieldsValue({ schedule });
    setSlotCount(count);
    form.validateFields(['video']);
  };
  const handleUploadSuccess = url => {
    console.log('Uploaded file URL:', url);
    setUploadedCetificateUrl(url);
  };
  const handleDeleteSuccess = url => {
    setUploadedCetificateUrl(null);
    console.log('delete', url);
  };
  const handleVideoUploadSuccess = url => {
    console.log('Uploaded video URL:', url);
    setUploadedVideoUrl(url);
  };

  const handleVideoDeleteSuccess = url => {
    console.log('Deleted video URL:', url);
    setUploadedVideoUrl(null);
  };
  return (
    <>
      <Card className="promotion-package">
        <p>
          <SubHeading classNames="d-block" strong>
            Buy package to add more details
          </SubHeading>
          <Paragraph>
            Consectur adipiscing elitsedo eiusmod tempor incididuntem utaborate dolore magna aliqua ad minim veniamque.
          </Paragraph>
        </p>
        <span className="btn-container">
          <Button type="text" className="btn">
            Buy a new package
          </Button>
        </span>
      </Card>
      <Card>
        {contextHolder}
        <SubHeading strong>Service form</SubHeading>
        <Divider />
        <Form onFinish={onFinish} onFinishFailed={onFinishFailed} form={form} layout="vertical">
          <Row gutter={[16, 4]} justify="center">
            <Col xs={24} lg={12}>
              <Form.Item
                label="Literacy"
                name="literacy"
                rules={[
                  {
                    required: true,
                    message: 'Please select your literacy!',
                  },
                ]}>
                <Select
                  size="large"
                  style={{
                    width: '100%',
                  }}
                  placeholder="Select your education level"
                  options={literacy}
                />
              </Form.Item>
            </Col>
            <Col xs={24} lg={12}>
              <Form.Item
                label="Desired Tutoring Location"
                name="location"
                rules={[
                  {
                    required: true,
                    message: 'Please select your desired tutoring location!',
                  },
                ]}>
                <Select
                  size="large"
                  mode="multiple"
                  style={{
                    width: '100%',
                  }}
                  placeholder="Select location you want to teach"
                  options={locationOptions}
                  optionRender={option => <Space>{option.data.label}</Space>}
                />
              </Form.Item>
            </Col>
            <Col xs={24} lg={12}>
              <Form.Item
                label="Class"
                name="class"
                rules={[
                  {
                    required: true,
                    message: 'Please select classes you want to teach!',
                  },
                ]}>
                <Select
                  size="large"
                  mode="multiple"
                  style={{
                    width: '100%',
                  }}
                  placeholder="Select classes you want to teach"
                  options={classes}
                  optionRender={option => <Space>{option.data.label}</Space>}
                />
              </Form.Item>
            </Col>
            <Col xs={24} lg={12}>
              <Form.Item
                label="Subject taught"
                name="subject"
                rules={[
                  {
                    required: true,
                    message: 'Please select subjects you want to teach!',
                  },
                ]}>
                <Select
                  size="large"
                  mode="multiple"
                  style={{
                    width: '100%',
                  }}
                  placeholder="Select subjects you want to teach"
                  options={subjects}
                  optionRender={option => <Space>{option.data.label}</Space>}
                />
              </Form.Item>
            </Col>
            <Col xs={24}>
              <Form.Item
                label="A brief introduction"
                name="introduction"
                rules={[
                  {
                    required: true,
                    message: 'Please input your brief introduction!',
                  },
                ]}>
                <TextArea
                  size="large"
                  showCount
                  maxLength={500}
                  placeholder="Enter your description"
                  style={{
                    height: 120,
                    resize: 'none',
                  }}
                />
              </Form.Item>
            </Col>
            <Col xs={24} lg={12}>
              <Form.Item
                label="Certificate evidence"
                validateTrigger={['onChange', 'onBlur']}
                rules={[
                  {
                    validator: (_, value) => {
                      if (!uploadedCetificateUrl) {
                        return Promise.reject(new Error('Please upload your certificate images'));
                      }
                      return Promise.resolve();
                    },
                  },
                ]}>
                <FileUploader
                  storagePath="tutorCertificate/"
                  onUploadSuccess={handleUploadSuccess}
                  onDeleteSuccess={handleDeleteSuccess}
                  limit={1}
                />
              </Form.Item>
            </Col>
            <Col xs={24} lg={12}>
              <Form.Item
                label="Video academic"
                validateTrigger={['onChange', 'onBlur']}
                rules={[
                  {
                    validator: (_, value) => {
                      if (!uploadedVideoUrl) {
                        return Promise.reject(new Error('Please upload your video academic'));
                      }
                      return Promise.resolve();
                    },
                  },
                ]}>
                <VideoUploader
                  storagePath="tutorVideo/"
                  onVideoUploadSuccess={handleVideoUploadSuccess}
                  onVideoDeleteSuccess={handleVideoDeleteSuccess}
                />
              </Form.Item>
            </Col>
            <Col xs={24}>
              <Form.Item
                label="Schedule"
                name="schedule"
                rules={[
                  {
                    required: true,
                    validator: async () => {
                      if (slotCount < 2) {
                        return Promise.reject(new Error('Please select at least 2 time slots!'));
                      }
                    },
                  },
                ]}>
                <ScheduleForm initialSchedule={initialSchedule} onChange={handleScheduleChange} />
              </Form.Item>
            </Col>
            <Form.Item>
              <BaseButton type="primary" htmlType="submit">
                Create
              </BaseButton>
            </Form.Item>
          </Row>
        </Form>
      </Card>
    </>
  );
};

export default ServiceForm;
