import './styles.scss';
import Layout from '../../hoc/Layout';
import { Col, Row } from 'antd';
import { SubHeading } from '../../components/Typography/SubHeading/SubHeading';
import SearchBar from './components/SearchBar/SearchBar';
import FilterSide from './components/FilterSide/FilterSide';
import TutorList from './components/TutorList/TutorList';
import subjects from '../../mock/subject.data.json';
// import { useEffect } from 'react';
// import { getAllSubjects } from '../../services/apis/subject.service';

const Tutors = () => {
  // useEffect(() => {
  //   const fetchSubjects = async () => {
  //     try {
  //       const response = await getAllSubjects();
  //       console.log('list', response);
  //     } catch (error) {
  //       console.log('Error at get all subject', error);
  //     }
  //   };
  //   fetchSubjects();
  // }, []);
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
              <TutorList subjects={subjects} />
            </Col>
          </Row>
        </div>
      </div>
    </Layout>
  );
};

export default Tutors;
