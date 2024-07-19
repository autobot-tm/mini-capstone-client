import './styles.scss';
import Layout from '../../hoc/Layout';
import { Col, Row } from 'antd';
import { SubHeading } from '../../components/Typography/SubHeading/SubHeading';
import SearchBar from './components/SearchBar/SearchBar';
import FilterSide from './components/FilterSide/FilterSide';
import TutorList from './components/TutorList/TutorList';
import { getAllTutor } from '../../services/apis/subject.service';
import { useEffect, useState } from 'react';

const Tutors = () => {
  const [tutors, setTutors] = useState([]);
  const [filteredTutors, setFilteredTutors] = useState([]);
  const [filters, setFilters] = useState({ tutorName: '', educationLevel: '', day: [], time: [] });

  const fetchSubjects = async () => {
    try {
      const response = await getAllTutor();
      setTutors(response);
      setFilteredTutors(response);
    } catch (error) {
      console.log('Error at get all subject', error);
    }
  };

  useEffect(() => {
    fetchSubjects();
  }, []);

  useEffect(() => {
    handleSearch(filters);
  }, [filters]);

  const handleSearch = ({ tutorName, educationLevel, day, time }) => {
    const filtered = tutors.filter(tutor => {
      const matchesName = tutorName ? tutor.fullname.toLowerCase().includes(tutorName.toLowerCase()) : true;
      const matchesEducationLevel = educationLevel ? tutor.educationLevel.educationLevel === educationLevel : true;
      const matchesDay = day.length ? tutor.scheduleRecords.some(record => day.includes(record.weekDay.day)) : true;
      const matchesTime = time.length
        ? tutor.scheduleRecords.some(record => time.includes(record.teachingSlot.time))
        : true;
      return matchesName && matchesEducationLevel && matchesDay && matchesTime;
    });
    setFilteredTutors(filtered);
  };

  const handleFiltersChange = newFilters => {
    setFilters({ ...filters, ...newFilters });
  };

  return (
    <Layout>
      <div className="tutors-page">
        <div className="container">
          <Row justify={[16, 16]}>
            <Col xs={24}>
              <SubHeading size={260}>{filteredTutors.length} search results found</SubHeading>
            </Col>
            <Col xs={24}>
              <SearchBar onSearch={newFilters => handleFiltersChange(newFilters)} />
            </Col>
          </Row>
          <Row justify="center" gutter={[24, 24]}>
            <Col xs={24} md={10} lg={6}>
              <FilterSide onFilterChange={newFilters => handleFiltersChange(newFilters)} />
            </Col>
            <Col xs={24} md={14} lg={18}>
              <TutorList tutors={filteredTutors} />
            </Col>
          </Row>
        </div>
      </div>
    </Layout>
  );
};

export default Tutors;
