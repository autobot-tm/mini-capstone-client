import './styles.scss';
import Layout from '../../hoc/Layout';
import TutorInfo from './components/TutorInfo/TutorInfo';
import TutorIntroduction from './components/TutorIntroduction/TutorIntroduction';
import { Card, Col, Row, Spin, Tabs } from 'antd';
import TutorContact from './components/TutorContact/TutorContact';
import TutorReview from './components/TutorReview/TutorReview';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getAllTutor } from '../../services/apis/subject.service';

const TutorDetail = () => {
  const { id: subject_id } = useParams();
  const [tutorInfo, setTutorInfo] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const fetchSubjects = async () => {
    setIsLoading(true);
    try {
      const response = await getAllTutor();
      const tutor = response.find(item => item.id === parseInt(subject_id));
      setTutorInfo(tutor);
    } catch (error) {
      console.log('Error at get all subject', error);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    fetchSubjects();
  }, [subject_id]);

  const items = [
    {
      key: '1',
      label: 'Introduction',
      children: <TutorIntroduction description={tutorInfo?.brief} tutorAvailability={tutorInfo?.scheduleRecords} />,
    },
    {
      key: '2',
      label: 'Reviews',
      children: <TutorReview />,
    },
  ];
  if (isLoading) return <Spin size="large" />;
  if (!tutorInfo) return 'Error';
  return (
    <Layout>
      <div className="tutors-detail-page">
        <div className="container">
          <Row justify="center" gutter={[24, 24]}>
            <Col xs={24} lg={18}>
              <TutorInfo
                tutorName={tutorInfo?.fullname}
                tutorEduLv={tutorInfo?.educationLevel}
                grade={tutorInfo?.grades}
                subject={tutorInfo?.subjects}
                location={tutorInfo?.locations}
              />
              <Card className="tabs-card">
                <Tabs defaultActiveKey="1" items={items} />
              </Card>
            </Col>
            <Col xs={24} lg={6}>
              <TutorContact tutorEmail={tutorInfo?.email} tutorPhone={tutorInfo?.phone || 'N/A'} />
            </Col>
          </Row>
        </div>
      </div>
    </Layout>
  );
};

export default TutorDetail;
