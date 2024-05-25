import { Col, Row } from 'antd';
import './styles.scss';
import { SubHeading } from '../../../../components/Typography/SubHeading/SubHeading';
import { Headline } from '../../../../components/Typography/Headline/Headline';
import { Paragraph } from '../../../../components/Typography/Paragraph/Paragraph';
import BaseButton from '../../../../components/Buttons/BaseButtons/BaseButton';
import { RightOutlined } from '@ant-design/icons';
import ZIGZAG from '../../../../assets/images/zigzagLine.svg';
import CEO from '../../../../assets/images/aboutCEO.png';
import DOT from '../../../../assets/images/dottedBackground.png';
import { Caption } from '../../../../components/Typography/Caption/Caption';

const AboutSection = ({ onAboutUs }) => {
  return (
    <div className="about-section">
      <Row className="container" justify="center">
        <Col className="about-section-first-col" xs={24} lg={12}>
          <div className="about-section-first-col-inner">
            <img src={ZIGZAG} alt="zigzag-line" />
            <br />
            <br />
            <SubHeading>Better Learning. Better Results</SubHeading>
            <Headline style={{ margin: '10px 0' }} strong>
              Online education platform for all
            </Headline>
            <Paragraph>
              Accusamus et iusidio dignissimos ducimus blanditiis praesentium voluptatum deleniti atque corrupti quos
              dolores etmquasa molestias epturi sint occaecati cupiditate non providente mikume.
            </Paragraph>
            <BaseButton onClick={onAboutUs} type="primary" style={{ width: 'auto', marginTop: 30 }}>
              Explore more about us <RightOutlined style={{ fontSize: 14 }} />
            </BaseButton>
          </div>
        </Col>
        <Col className="about-section-second-col" xs={24} lg={12}>
          <div className="about-section-second-col-images">
            <img src={CEO} alt="ceo" className="ceo-image" />
            <img src={DOT} alt="dot" className="dot-image" />
            <div className="signature">
              <Caption classNames="d-block">Founder & CEO</Caption>
              <Paragraph strong>Alan Waker</Paragraph>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default AboutSection;
