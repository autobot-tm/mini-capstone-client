import './styles.scss';
import Layout from '../../hoc/Layout';
import { Col, Row } from 'antd';
import { SubHeading } from '../../components/Typography/SubHeading/SubHeading';
import SearchBar from './components/SearchBar/SearchBar';
import FilterSide from './components/FilterSide/FilterSide';
import TutorList from './components/TutorList/TutorList';

const Tutors = () => {
  return (
    <Layout>
      <div className="tutors-page">
        <div className="container">
          <Row justify={[16, 16]}>
            <Col xs={24}>
              <SubHeading size={260}>0 search results found</SubHeading>
            </Col>
            <Col xs={24}>
              <SearchBar />
            </Col>
          </Row>
          <Row justify="center" gutter={[24, 24]}>
            <Col xs={24} md={10} lg={6}>
              <FilterSide />
            </Col>
            <Col xs={24} md={14} lg={18}>
              <TutorList />
            </Col>
          </Row>
        </div>
      </div>
    </Layout>
  );
};

export default Tutors;
