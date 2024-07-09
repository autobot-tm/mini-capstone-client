import { Layout, Row, Col, Card, Typography } from 'antd';
import './styles.scss';

const { Content } = Layout;
const { Title, Paragraph } = Typography;

const RegulationsAcc = () => (
  <Layout className="theme-main-wrapper">
    <Content className="tu-main-section">
      <div className="container">
        <Row className="tu-blogs-bottom">
          <Col span={24}>
            <Card className="tu-theme-box">
              <header className="entry-header tb-checkoutheader">
                <Title level={3} className="tuturn-entry-title">
                  Regulations for Tutor Accounts
                </Title>
              </header>
              <div className="entry-content">
                <Title level={4} className="wp-block-heading">
                  Regulations for Tutor Accounts
                </Title>
                <Paragraph>
                  Strictly comply with regulations when using products and services provided on the TUTUR system. Commitment that the information when registering such as: qualifications, phone number, avatar is real and belongs to you personally. Do not sign up for a tutoring service if you cannot arrange time to teach. If TUTUR discovers that you take a class and transfer someone else to teach, your account will be deleted from the system.
                </Paragraph>
                <Title level={4} className="wp-block-heading">
                  Benefits of a Tutor Account
                </Title>
                <Paragraph>
                  Tutors only have to pay for posting their services to the system. Students may ask the Tutor to present identification documents (CID/Passport) to confirm that you are the teacher accepting the class, but you absolutely DO NOT GIVE IDENTITY DOCUMENTS to anyone who wants to keep them.
                </Paragraph>
                <Paragraph>
                  Students only have the right to view for confirmation during the first lesson. If a student acts inappropriately or does not create favorable conditions for your teaching, IMMEDIATELY CANCEL THE CLASS, and report the violation to TUTUR. We will take measures to deal with students and protect you absolutely.
                </Paragraph>
              </div>
            </Card>
          </Col>
        </Row>
      </div>
    </Content>
  </Layout>
);

export default RegulationsAcc;
