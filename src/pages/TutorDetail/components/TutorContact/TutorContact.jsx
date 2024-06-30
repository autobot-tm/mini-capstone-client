import './styles.scss';
import { Card, Divider } from 'antd';
import { SubHeading } from '../../../../components/Typography/SubHeading/SubHeading';

const TutorContact = ({ tutorEmail, tutorPhone }) => {
  return (
    <Card>
      <SubHeading strong>Contact me</SubHeading> <Divider dashed />
      <span className="contact-info">
        <p>Mobile</p>
        <p>{tutorPhone}</p>
      </span>
      <Divider dashed />
      <span className="contact-info">
        <p>Email</p>
        <p>{tutorEmail}</p>
      </span>
    </Card>
  );
};

export default TutorContact;
