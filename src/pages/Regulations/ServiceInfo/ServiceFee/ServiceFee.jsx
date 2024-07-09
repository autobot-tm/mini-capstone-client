
import { Layout, Row, Col, Card, Typography } from 'antd';
import './styles.scss';
const { Content } = Layout;
const { Title, Paragraph, Text } = Typography;

const ServiceFee = () => (
  <Layout className="theme-main-wrapper">
    <Content className="main-section">
      <div className="container">
        <Row className="blogs-bottom">
          <Col span={24}>
            <Card className="theme-box">
              <header className="entry-header tb-checkoutheader">
                <Title level={3} className="tuturn-entry-title">Fee collection and service policy</Title>
              </header>
              <div className="entry-content">
                <Title level={4} className="wp-block-heading">General rules</Title>
                <Paragraph>
                TUTUR does not charge membership fees, which means, all registrations on TUTUR are free. TUTUR only charges fees for certain services and users are notified when deciding to use them.
                fee (fee for posting teaching information)
                </Paragraph>

                <Title level={4} className="wp-block-heading">Why is there a fee?</Title>
                <Paragraph>
                The fee is used to pay for SMS messages sent to students and tutors related to the teaching you send to students. For example, send a text message to notify students of a new teaching offer, or notify the tutor if a teaching offer has been accepted. We hope for your understanding because of this, we only want to bring the greatest convenience to users.
                </Paragraph>
                <Paragraph>
                When do tutors need to pay fees: When tutors post information to be able to accept lessons, Note that fees will be returned if the posting is canceled according to the refund policy.
                </Paragraph>
                <Paragraph>
                <Text strong className="privacy-policy-tutorial">Note: </Text>
                This fee must only be paid once and includes VAT. If the tutor sees any violations or has any questions, please contact TUTUR at hotline: 0967237073.
                </Paragraph>
                <Title level={4} className="wp-block-heading">Refund policy</Title>
                <Paragraph>
                The service posting fee paid by the tutor will be refunded when the class is canceled due to objective reasons from the system or tutor. Objective reasons are understood as the following reasons:

                </Paragraph>
                <Paragraph>
                The system feels the tutor is not suitable.
                </Paragraph>
                <Paragraph>
                The tutor cannot be contacted to approve the service after 48 hours.
                </Paragraph>
                <Paragraph>
                Tutor is sick and cannot teach (with doctor certificate).
                </Paragraph>
                <Paragraph>
                Tutor has special reasons and cannot teach (confirmed by competent authority).
                </Paragraph>
              </div>
            </Card>
          </Col>
        </Row>
      </div>
    </Content>
  </Layout>
);

export default ServiceFee;
