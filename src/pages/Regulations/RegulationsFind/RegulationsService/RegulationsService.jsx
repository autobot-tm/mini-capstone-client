import { Layout, Row, Col, Card, Typography } from 'antd';
import './styles.scss';

const { Content } = Layout;
const { Title, Paragraph,Text } = Typography;

const RegulationsService = () => (
  <Layout className="theme-main-wrapper">
    <Content className="tu-main-section">
      <div className="container">
        <Row className="tu-blogs-bottom">
          <Col span={24}>
            <Card className="tu-theme-box">
              <header className="entry-header tb-checkoutheader">
                <Title level={3} className="tuturn-entry-title">
                Regulations when posting a request to find a teacher
                </Title>
              </header>
              <div className="entry-content">
                <Title level={4} className="wp-block-heading">
                  Interest
                </Title>
                <Paragraph>
                You can send teaching requests to teachers completely free of charge.
                </Paragraph>
                <Paragraph>
                <Text strong className="privacy-policy-tutorial">Note: </Text>
                Minimize accepting and then canceling classes, because this will negatively affect your profile on the system. And then, teachers will not continue to send teaching requests to the classes you will open.
                </Paragraph>
                <Title level={4} className="wp-block-heading">
                Regulations when posting a request to find a teacher on the TUTUR system
                </Title>
                <Paragraph>
                Comply with TUTUR operating regulations.                
                </Paragraph>
                <Paragraph>
                Make sure the information given is correct, for example: your phone number, address, subject, etc.
                </Paragraph>
                <Paragraph>
                Do not charge any fees from the teacher who takes the class
                </Paragraph>
                <Paragraph>
                Pay tuition on time and in the correct amount as requested and accepted by the teacher.
                </Paragraph>
                <Paragraph>
                Create all conditions for teachers and tutors to perform well in teaching.
                </Paragraph>
              </div>
            </Card>
          </Col>
        </Row>
      </div>
    </Content>
  </Layout>
);

export default RegulationsService;
