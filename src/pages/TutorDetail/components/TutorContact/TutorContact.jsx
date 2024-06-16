import './styles.scss';
import { Card, Divider } from 'antd';
import { SubHeading } from '../../../../components/Typography/SubHeading/SubHeading';

const TutorContact = ({ tutor = {} }) => {
  return (
    <Card>
      <SubHeading strong>Contact me</SubHeading> <Divider dashed />
      <span className="contact-info">
        <p>Mobile</p>
        <p>{tutor.phone}</p>
      </span>
      <Divider dashed />
      <span className="contact-info">
        <p>Email</p>
        <p>tutor@edu.vn</p>
      </span>
    </Card>
  );
};

export default TutorContact;
