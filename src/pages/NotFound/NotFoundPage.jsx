import './styles.scss';
import { Col, Row } from 'antd';
import NOTFOUND from '../../assets/images/404img.png';
import { SubHeading } from '../../components/Typography/SubHeading/SubHeading';
import { Headline } from '../../components/Typography/Headline/Headline';
import { Caption } from '../../components/Typography/Caption/Caption';

const NotFoundPage = () => {
  return (
    <div className="not-found-page">
      <div className="container">
        <Row justify="center">
          <Col xs={24} lg={12} className="not-found-page-left">
            <p>
              <SubHeading>You running into nowhere</SubHeading>
              <Headline strong style={{ marginBottom: 10 }}>
                Uhoo! Page not found
              </Headline>
              <Caption size={160}>
                It looks like nothing was found on this path. Goto{' '}
                <a href="/">
                  <b>Homepage</b>
                </a>
              </Caption>
            </p>
          </Col>
          <Col xs={24} lg={12} className="not-found-page-right">
            <figure>
              <img src={NOTFOUND} alt="404 img" />
            </figure>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default NotFoundPage;
