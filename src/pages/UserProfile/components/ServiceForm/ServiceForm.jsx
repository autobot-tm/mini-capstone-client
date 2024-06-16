import { useState } from 'react';
import BaseButton from '../../../../components/Buttons/BaseButtons/BaseButton';
import { SubHeading } from '../../../../components/Typography/SubHeading/SubHeading';
import { classes, literacy, locationOptions, subjects } from '../../../../constants/option.constant';
import './styles.scss';
import { Button, Card, Col, Divider, Form, Row, Select, Space, notification } from 'antd';
import { Paragraph } from '../../../../components/Typography/Paragraph/Paragraph';
import ScheduleForm from '../../../../components/Schedule/ScheduleForm';
import { createSubjectService } from '../../../../services/apis/subject.service';

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
  const [slotCount, setSlotCount] = useState(0);
  const [api, contextHolder] = notification.useNotification();
  const openNotification = () => {
    api.success({
      message: `Service Created Successfully`,
      description: 'Your service has been successfully created. Please wait for our review within 24 hours.',
    });
  };
  const onFinish = async values => {
    const { schedule, grade, name } = values;
    const tutorSchedules = Object.entries(schedule).flatMap(([weekDay, times]) =>
      times.map(teachingTime => ({ weekDay, teachingTime })),
    );
    const tutorData = {
      tutorSchedules,
      name,
      grade,
    };
    try {
      const response = await createSubjectService(tutorData);
      if (response.ok) {
        openNotification();
        form.resetFields();
      } else {
        form.resetFields();
        console.error('error at create subject:', await response);
      }
    } catch (error) {
      form.resetFields();
      console.error('error at create subject:', error);
    }
  };
  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };
  const handleScheduleChange = schedule => {
    form.setFieldsValue({ schedule });
    setSlotCount(Object.values(schedule).flat().length);
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
            {/* <Col xs={24} lg={12}>
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
            </Col> */}
            {/* <Col xs={24} lg={12}>
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
            </Col> */}
            <Col xs={24} lg={12}>
              <Form.Item
                label="Grade"
                name="grade"
                rules={[
                  {
                    required: true,
                    message: 'Please select grade you want to teach!',
                  },
                ]}>
                <Select
                  size="large"
                  // mode="multiple"
                  style={{
                    width: '100%',
                  }}
                  placeholder="Select grade you want to teach"
                  options={classes}
                  optionRender={option => <Space>{option.data.label}</Space>}
                />
              </Form.Item>
            </Col>
            <Col xs={24} lg={12}>
              <Form.Item
                label="Subject taught"
                name="name"
                rules={[
                  {
                    required: true,
                    message: 'Please select subjects you want to teach!',
                  },
                ]}>
                <Select
                  size="large"
                  // mode="multiple"
                  style={{
                    width: '100%',
                  }}
                  placeholder="Select subjects you want to teach"
                  options={subjects}
                  optionRender={option => <Space>{option.data.label}</Space>}
                />
              </Form.Item>
            </Col>
            {/* <Col xs={24}>
              <Form.Item
                label="Video"
                name="video"
                rules={[
                  {
                    required: true,
                    message: 'Please upload your video',
                  },
                ]}>
                <VideoUploader />
              </Form.Item>
            </Col> */}
            {/* <Col xs={24}>
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
                  onChange={onChange}
                  placeholder="Enter your description"
                  style={{
                    height: 120,
                    resize: 'none',
                  }}
                />
              </Form.Item>
            </Col> */}
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
