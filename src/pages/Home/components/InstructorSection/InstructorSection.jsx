import { Col, Row } from 'antd';
import './styles.scss';
import { SubHeading } from '../../../../components/Typography/SubHeading/SubHeading';
import { Headline } from '../../../../components/Typography/Headline/Headline';
import { Caption } from '../../../../components/Typography/Caption/Caption';
import { RightOutlined } from '@ant-design/icons';
import BaseButton from '../../../../components/Buttons/BaseButtons/BaseButton';
import ZIGZAG from '../../../../assets/images/zigzagLine.svg';
import TutorCard from './components/TutorCard/TutorCard';
import subjects from '../../../../mock/subject.data.json';

const InstructorSection = ({ onFindTutor }) => {
  return (
    <div className="instructor-section">
      <div className="container">
        <Row className="instructor-section-first-row" justify="center">
          <Col xs={24} md={16}>
            <img src={ZIGZAG} alt="zigzag-line" />
            <br />
            <br />
            <SubHeading classNames="d-block">Our featured instructors</SubHeading>
            <Headline classNames="d-block" strong>
              Highly qualified professionals
            </Headline>
            <br />
            <Caption style={{ width: '10%' }} size={160}>
              Accusamus et iusidio dignissimos ducimus blanditiis praesentium voluptatum deleniti atque corrupti quos
              dolores etmquasa molestias epturi sint occaecati cupiditate non providente mikume.
            </Caption>
          </Col>
        </Row>
        <Row justify="center" className="instructor-section-second-row" gutter={[24, 24]}>
          {subjects?.slice(0, 4).map(item => {
            return (
              <Col xs={24} sm={12} xl={6} key={item.id}>
                <TutorCard
                  url="https://www.youtube.com/watch?v=JeOggtJH5n8"
                  avatar="https://api.dicebear.com/7.x/miniavs/svg?seed=8"
                  id={item.id}
                  fullname={item.tutor.fullname}
                  rating={item.tutor.rating}
                  subject={item.name}
                  educationLevel={item.tutor.educationLevel}
                />
              </Col>
            );
          })}
          <BaseButton onClick={onFindTutor} style={{ width: 'auto', marginTop: 20 }} type="text">
            Explore all tutors <RightOutlined style={{ fontSize: 14 }} />
          </BaseButton>
        </Row>
      </div>
    </div>
  );
};

export default InstructorSection;
