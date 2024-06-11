import { Col, Row } from 'antd';
import './styles.scss';
import { Headline } from '../../../../components/Typography/Headline/Headline';
import { Paragraph } from '../../../../components/Typography/Paragraph/Paragraph';
import BaseButton from '../../../../components/Buttons/BaseButtons/BaseButton';
import HOME_FIRST from '../../../../assets/images/HomeSection1.svg';
import { RightOutlined } from '@ant-design/icons';
import { useSelector } from 'react-redux';

const HeaderSection = ({ onLogin, handleConfirmTutor }) => {
  const user = useSelector(state => state.auth.user);
  const token = user?.token;
  const role = user?.role;
  return (
    <div className="header-section">
      <Row className="container" justify="center">
        <Col xs={24} md={14} className="header-section-first-col">
          <div className="header-section-first-col-inner">
            <Headline size={520} strong>
              A good <b style={{ color: '#1da1f2' }}>#education</b> is always a base of{' '}
            </Headline>
            <Headline classNames="bg-text" strong>
              ENDLESS OPPORTUNITIES
            </Headline>
            <br />
            <Paragraph style={{ width: '60%' }}>
              Consectur adipiscing elitsedo eiusmod tempor incididuntem utaborate dolore magna aliqua ad minim
              veniamque.
            </Paragraph>
            <br />
            {!token && (
              <>
                <BaseButton onClick={onLogin} type="text" className="header-section-first-col-inner-btn highlight">
                  Start as Student <RightOutlined style={{ fontSize: 14 }} />
                </BaseButton>
                <BaseButton onClick={onLogin} type="dashed" className="header-section-first-col-inner-btn">
                  Join as Tutor
                </BaseButton>
              </>
            )}
            {token && role !== 'TUTOR' && (
              <BaseButton onClick={handleConfirmTutor} type="dashed" className="header-section-first-col-inner-btn">
                Become a Tutor
              </BaseButton>
            )}
          </div>
        </Col>
        <Col xs={24} md={10} className="header-section-second-col">
          <img src={HOME_FIRST} alt="tutor" />
        </Col>
      </Row>
    </div>
  );
};

export default HeaderSection;
