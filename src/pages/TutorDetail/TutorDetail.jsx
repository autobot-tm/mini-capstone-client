import './styles.scss';
import Layout from '../../hoc/Layout';
import TutorInfo from './components/TutorInfo/TutorInfo';
import TutorIntroduction from './components/TutorIntroduction/TutorIntroduction';
import { Card, Col, Row, Tabs } from 'antd';
import TutorContact from './components/TutorContact/TutorContact';
import TutorReview from './components/TutorReview/TutorReview';

const TutorDetail = () => {
  const items = [
    {
      key: '1',
      label: 'Introduction',
      children: <TutorIntroduction />,
    },
    {
      key: '2',
      label: 'Reviews',
      children: <TutorReview />,
    },
  ];
  return (
    <Layout>
      <div className="tutors-detail-page">
        <div className="container">
          <Row justify="center" gutter={[24, 24]}>
            <Col xs={24} lg={18}>
              <TutorInfo />
              <Card className="tabs-card">
                <Tabs defaultActiveKey="1" items={items} />
              </Card>
            </Col>
            <Col xs={24} lg={6}>
              <TutorContact />
            </Col>
          </Row>
        </div>
      </div>
    </Layout>
  );
};

export default TutorDetail;
