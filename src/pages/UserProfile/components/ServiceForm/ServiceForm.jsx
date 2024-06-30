import { useEffect, useState } from 'react';
import BaseButton from '../../../../components/Buttons/BaseButtons/BaseButton';
import { SubHeading } from '../../../../components/Typography/SubHeading/SubHeading';
import './styles.scss';
import { Button, Card, Col, Divider, Form, Row, Select, Space, Tag, notification } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import { Paragraph } from '../../../../components/Typography/Paragraph/Paragraph';
import VideoUploader from '../../../../components/VideoUploader/VideoUploader';
import {
  createSubjectService,
  getAllEducationLevel,
  getAllGrades,
  getAllLocations,
  getAllSubjects,
  updateSubjectService,
} from '../../../../services/apis/subject.service';
import { ArrowRightOutlined, EditOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ScheduleTable from '../../../../components/Schedule/ScheduleForm';

const ServiceForm = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const { user } = useSelector(state => state.auth);
  const userProfile = useSelector(state => state.user.user);
  const [slotCount, setSlotCount] = useState(0);
  const [uploadedVideoUrl, setUploadedVideoUrl] = useState(null);
  const [api, contextHolder] = notification.useNotification();
  const [subjects, setSubjects] = useState([]);
  const [locations, setLocations] = useState([]);
  const [grades, setGrades] = useState([]);
  const [eduLevel, setEduLevel] = useState([]);
  const isSubjectRegister = userProfile?.subjectRegistrationStatus;
  const [isEdit, setIsEdit] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [subjectsResponse, locationsResponse, gradesResponse, eduLevelsResponse] = await Promise.all([
          getAllSubjects(),
          getAllLocations(),
          getAllGrades(),
          getAllEducationLevel(),
        ]);

        const formattedSubjects = subjectsResponse.map(subject => ({
          value: subject.id,
          label: subject.name,
        }));

        const formattedLocations = locationsResponse.map(location => ({
          value: location.id,
          label: location.location,
        }));

        const formattedGrades = gradesResponse.map(grade => ({
          value: grade.id,
          label: grade.grade,
        }));

        const formattedEduLevels = eduLevelsResponse.map(eduLevel => ({
          value: eduLevel.id,
          label: eduLevel.educationLevel,
        }));

        setSubjects(formattedSubjects);
        setLocations(formattedLocations);
        setGrades(formattedGrades);
        setEduLevel(formattedEduLevels);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  const successCreate = () => {
    api.success({
      message: `Service Created Successfully`,
      description: 'Your service has been successfully created. Please wait for our review within 24 hours.',
    });
  };

  const updateCreate = () => {
    api.success({
      message: `Service Updated Successfully`,
      description: 'Your service has been successfully updated. Please wait for our review within 24 hours.',
    });
  };

  const errorUpVideo = () => {
    api.warning({
      message: 'Please upload your video academic!',
    });
  };

  const onFinish = async values => {
    if (!uploadedVideoUrl) {
      errorUpVideo();
      return;
    }
    const dataToSend = {
      ...values,
      accountId: user?.id,
      tutorVideoUrl: uploadedVideoUrl,
    };
    if (dataToSend && isEdit === 1) {
      await createSubjectService(dataToSend);
      successCreate();
      form.resetFields();
    } else {
      await updateSubjectService(dataToSend);
      updateCreate();
      form.resetFields();
    }
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
      {/* <Card className="promotion-package">
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
      </Card> */}
      {contextHolder}
      {isSubjectRegister === 'PENDING' || (isSubjectRegister === 'APPROVED' && isEdit === 1) ? (
        <Card className="status-service-form">
          <SubHeading strong>My service</SubHeading>
          {isSubjectRegister === 'PENDING' && <Tag color="cyan">Processing</Tag>}
          {isSubjectRegister === 'APPROVED' && (
            <>
              <Tag color="green">Active</Tag>{' '}
              <dir className="container-edit">
                <Button icon={<EditOutlined />} onClick={() => setIsEdit(2)} />
                <Button icon={<ArrowRightOutlined />} onClick={() => navigate(`/tutors/${user?.id}`)} />
              </dir>
            </>
          )}
        </Card>
      ) : (
        <Card>
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
                    options={eduLevel}
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
                    options={locations}
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
                    options={grades}
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
                      required: true,
                      validator: async (_, value) => {
                        if (!uploadedVideoUrl) {
                          return await Promise.reject(new Error('Please upload your video academic'));
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
                  label="Available Schedule"
                  name="dayAndSlotRequests"
                  rules={[
                    {
                      required: true,
                    },
                  ]}>
                  <ScheduleTable onChange={handleScheduleChange} />
                </Form.Item>
              </Col>
              <Form.Item>
                <BaseButton type="primary" htmlType="submit">
                  {isEdit === 1 ? 'Create' : 'Update'}
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
