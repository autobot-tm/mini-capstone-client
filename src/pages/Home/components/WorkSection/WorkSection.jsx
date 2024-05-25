import './styles.scss';
import { Col, Row } from 'antd';
import BaseButton from '../../../../components/Buttons/BaseButtons/BaseButton';
import { RightOutlined } from '@ant-design/icons';
import { Headline } from '../../../../components/Typography/Headline/Headline';
import SHAPE from '../../../../assets/images/shapeWork.png';
import DOT from '../../../../assets/images/dottedBackground.png';
import ITEM1 from '../../../../assets/images/workSectionImg1.png';
import ITEM2 from '../../../../assets/images/workSectionImg2.png';
import ITEM3 from '../../../../assets/images/workSectionImg3.png';
import ITEM4 from '../../../../assets/images/workSectionImg4.png';
import { SubHeading } from '../../../../components/Typography/SubHeading/SubHeading';
import { Caption } from '../../../../components/Typography/Caption/Caption';

const WorkSection = ({ onHowItWork }) => {
  return (
    <div className="work-section">
      <img src={DOT} alt="dot-pattern" className="dot-img" />
      <img src={SHAPE} alt="shape-pattern" className="shape-img" />
      <div className="container">
        <Row className="work-section-first-row" justify="center">
          <Col xs={24} sm={14}>
            <Headline classNames="text" strong>
              Stats that explain everything about #Our success
            </Headline>
          </Col>
          <Col xs={24} sm={10} style={{ display: 'flex', justifyContent: 'end' }}>
            <BaseButton type="primary" onClick={onHowItWork} style={{ width: 'auto', position: 'relative', zIndex: 2 }}>
              See how it work <RightOutlined style={{ fontSize: 14 }} />
            </BaseButton>
          </Col>
        </Row>
        <Row className="work-section-second-row" gutter={[24, 24]}>
          <Col xs={24} sm={12} lg={6}>
            <CardItem img={ITEM1} report="561,616" description="Courses available for verified and top tutors" />
          </Col>
          <Col xs={24} sm={12} lg={6}>
            <CardItem img={ITEM2} report="648,482" description="Total tuition job posted on the platform till date" />
          </Col>
          <Col xs={24} sm={12} lg={6}>
            <CardItem img={ITEM3} report="20+ Hours" description="User daily average time spent on the platform" />
          </Col>
          <Col xs={24} sm={12} lg={6}>
            <CardItem
              img={ITEM4}
              report="7+ Million"
              description="Active instructor and students available on the platform"
            />
          </Col>
        </Row>
      </div>
    </div>
  );
};

const CardItem = ({ img, report, description }) => {
  return (
    <div className="card-inf">
      <div className="card-inf-wrapper">
        <figure>
          <img src={img} alt={img} />
        </figure>
        <SubHeading classNames="d-block" strong>
          {report}
        </SubHeading>
        <Caption size={160}>{description}</Caption>
      </div>
    </div>
  );
};
export default WorkSection;
