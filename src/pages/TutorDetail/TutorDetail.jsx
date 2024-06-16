import './styles.scss';
import Layout from '../../hoc/Layout';
import TutorInfo from './components/TutorInfo/TutorInfo';
import TutorIntroduction from './components/TutorIntroduction/TutorIntroduction';
import { Card, Col, Row, Tabs } from 'antd';
import TutorContact from './components/TutorContact/TutorContact';
import TutorReview from './components/TutorReview/TutorReview';
import subjects from '../../mock/subject.data.json';
import { useParams } from 'react-router-dom';
const TutorDetail = () => {
  const { id: subject_id } = useParams();
  const subject = subjects.find(item => item.id === parseInt(subject_id));
  const items = [
    {
      key: '1',
      label: 'Introduction',
      children: <TutorIntroduction description={subject?.description} tutorAvailability={subject?.tutorSchedules} />,
    },
    {
      key: '2',
      label: 'Reviews',
      children: <TutorReview />,
    },
  ];
  if (!subject) return 'Error';
  return (
    <Layout>
      <div className="tutors-detail-page">
        <div className="container">
          <Row justify="center" gutter={[24, 24]}>
            <Col xs={24} lg={18}>
              <TutorInfo tutor={subject?.tutor} subject={subject?.name} location={subject?.location} />
              <Card className="tabs-card">
                <Tabs defaultActiveKey="1" items={items} />
              </Card>
            </Col>
            <Col xs={24} lg={6}>
              <TutorContact tutor={subject?.tutor} />
            </Col>
          </Row>
        </div>
      </div>
    </Layout>
  );
};

export default TutorDetail;
