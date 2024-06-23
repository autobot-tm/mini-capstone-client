import { useEffect, useState } from 'react';
import BaseButton from '../../../../components/Buttons/BaseButtons/BaseButton';
import { SubHeading } from '../../../../components/Typography/SubHeading/SubHeading';
import { classes, literacy, locationOptions } from '../../../../constants/option.constant';
import './styles.scss';
import { Button, Card, Col, Divider, Form, Row, Select, Space, Tag, notification } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import { Paragraph } from '../../../../components/Typography/Paragraph/Paragraph';
import ScheduleForm from '../../../../components/Schedule/ScheduleForm';
import VideoUploader from '../../../../components/VideoUploader/VideoUploader';
import { getAllSubjects } from '../../../../services/apis/subject.service';
import { ArrowRightOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

const initialSchedule = {
  Monday: [],
  Tuesday: [],
  Wednesday: [],
  Thursday: [],
  Friday: [],
  Saturday: [],
  Sunday: [],
};

const ServiceForm = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const [slotCount, setSlotCount] = useState(0);
  const [uploadedVideoUrl, setUploadedVideoUrl] = useState(null);
  const [api, contextHolder] = notification.useNotification();
  const [subjects, setSubjects] = useState([]);
  //test
  const id = 1;
  const STATUS = 'ACTIVE';
  useEffect(() => {
    const fetchSubjects = async () => {
      try {
        const response = await getAllSubjects();
        const formattedSubjects = response.map(subject => ({
          value: subject.id,
          label: subject.name,
        }));
        setSubjects(formattedSubjects);
      } catch (error) {
        console.log(error);
      }
    };
    fetchSubjects();
  }, []);

  const openNotification = () => {
    api.success({
      message: `Service Created Successfully`,
      description: 'Your service has been successfully created. Please wait for our review within 24 hours.',
    });
  };

  const onFinish = values => {
    const dataToSend = {
      ...values,
      tutorVideoUrl: uploadedVideoUrl,
    };

    console.log('Data to send:', dataToSend);

    openNotification();
    form.resetFields();
  };

  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };

  const handleScheduleChange = schedule => {
    form.setFieldsValue({ schedule });
    setSlotCount(Object.values(schedule).flat().length);
    form.validateFields(['video']);
  };

  const handleVideoUploadSuccess = url => {
    console.log('Uploaded video URL:', url);
    setUploadedVideoUrl(url);
  };

  const handleVideoDeleteSuccess = url => {
    console.log('delete video success:', url);
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
      {STATUS === 'PENDING' || STATUS === 'ACTIVE' ? (
        <Card className="status-service-form">
          <SubHeading strong>Your service</SubHeading>
          {STATUS === 'PENDING' && <Tag color="cyan">Processing</Tag>}
          {STATUS === 'ACTIVE' && (
            <>
              <Tag color="green">ACTIVE</Tag>{' '}
              <Button icon={<ArrowRightOutlined />} onClick={() => navigate(`/tutors/${id}`)} />
            </>
          )}
        </Card>
      ) : (
        <Card>
          {contextHolder}
          <SubHeading strong>Service form</SubHeading>
          <Divider />
          <Form onFinish={onFinish} onFinishFailed={onFinishFailed} form={form} layout="vertical">
            <Row gutter={[16, 4]} justify="center">
              <Col xs={24} lg={12}>
                <Form.Item
                  label="Education level"
                  name="educationLevelId"
                  rules={[
                    {
                      required: true,
                      message: 'Please select your education level!',
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
                  label="Desired tutoring locations"
                  name="locationIds"
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
                    placeholder="Select locations you want to teach"
                    options={locationOptions}
                    optionLabelProp="label"
                    optionRender={option => <Space>{option.data.label}</Space>}
                  />
                </Form.Item>
              </Col>
              <Col xs={24} lg={12}>
                <Form.Item
                  label="Desired tutoring grades"
                  name="gradeIds"
                  rules={[
                    {
                      required: true,
                      message: 'Please select grades you want to teach!',
                    },
                  ]}>
                  <Select
                    size="large"
                    mode="multiple"
                    style={{
                      width: '100%',
                    }}
                    placeholder="Select grades you want to teach"
                    options={classes}
                    optionLabelProp="label"
                    optionRender={option => <Space>{option.data.label}</Space>}
                  />
                </Form.Item>
              </Col>
              <Col xs={24} lg={12}>
                <Form.Item
                  label="Desired tutoring subjects"
                  name="subjectIds"
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
                    // optionLabelProp="label"
                    optionRender={option => <Space>{option.data.label}</Space>}
                  />
                </Form.Item>
              </Col>
              <Col xs={24}>
                <Form.Item
                  label="A brief introduction"
                  name="brief"
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
              <Col xs={24}>
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
      )}
    </>
  );
};

export default ServiceForm;
