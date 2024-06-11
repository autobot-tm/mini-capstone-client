import { Card, Col, Row } from "antd";
import Title from "antd/es/skeleton/Title";
import './styles.scss'
import { Paragraph } from "../../../../components/Typography/Paragraph";
const AboutSection = () => {
    return(
        <div className="tu-main-section">
        <div className="container">
          <Row justify="center">
            <Col span={24} md={16} lg={12}>
              <div className="tu-maintitle text-center">
                <img
                  decoding="async"
                  src="https://demos.wp-guppy.com/tuturn/wp-content/plugins/tuturn/public/images/zigzag-line.svg"
                  
                />
                <h4>Making ease for everyone</h4>
                <h2>We made it in easy way</h2>
                <Paragraph>
                  accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident
                </Paragraph>
              </div>
            </Col>
          </Row>
          <Row gutter={[16, 16]} className="tu-howit-steps">
            <Col xs={24} md={12} xl={8}>
              <Card className="tu-howit-steps_content">
                <figure>
                  <img
                    decoding="async"
                    src="https://demos.wp-guppy.com/tuturn/wp-content/uploads/2022/05/1.png"
                    alt="STEP 01"
                  />
                </figure>
                <div className="tu-howit-steps_info">
                  <span className="tu-step-tag tu-orange-bgclr">STEP 01</span>
                  <Title level={5}>Post a tuition job</Title>
                  <Paragraph>
                    Aeccusamus et iusto odiomae dignissimos ducimus quistames blanditiis praesentium voluptatum loramkes anuten.
                  </Paragraph>
                </div>
              </Card>
            </Col>
            <Col xs={24} md={12} xl={8}>
              <Card className="tu-howit-steps_content">
                <figure>
                  <img
                    decoding="async"
                    src="https://demos.wp-guppy.com/tuturn/wp-content/uploads/2022/05/2.png"
                    alt="STEP 02"
                  />
                </figure>
                <div className="tu-howit-steps_info">
                  <span className="tu-step-tag tu-purple-bgclr">STEP 02</span>
                  <Title level={5}>Hire your best match</Title>
                  <Paragraph>
                    Aeccusamus et iusto odiomae dignissimos ducimus quistames blanditiis praesentium voluptatum loramkes anuten.
                  </Paragraph>
                </div>
              </Card>
            </Col>
            <Col xs={24} md={12} xl={8}>
              <Card className="tu-howit-steps_content">
                <figure>
                  <img
                    decoding="async"
                    src="https://demos.wp-guppy.com/tuturn/wp-content/uploads/2022/05/3.png"
                    alt="STEP 03"
                  />
                </figure>
                <div className="tu-howit-steps_info">
                  <span className="tu-step-tag tu-green-bgclr">STEP 03</span>
                  <Title level={5}>Get it done on time</Title>
                  <Paragraph>
                    Aeccusamus et iusto odiomae dignissimos ducimus quistames blanditiis praesentium voluptatum loramkes anuten.
                  </Paragraph>
                </div>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    );
};
export default AboutSection;