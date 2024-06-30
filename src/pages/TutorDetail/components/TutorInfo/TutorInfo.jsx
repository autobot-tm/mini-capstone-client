import { StarFilled } from '@ant-design/icons';
import { SubHeading } from '../../../../components/Typography/SubHeading/SubHeading';
import './styles.scss';
import { Avatar, Button, Card, Divider, Tag } from 'antd';
import { Paragraph } from '../../../../components/Typography/Paragraph/Paragraph';
import { Caption } from '../../../../components/Typography/Caption/Caption';
import BaseButton from '../../../../components/Buttons/BaseButtons/BaseButton';

// const textBtn = "Let's task now";
const TutorInfo = ({ tutorEduLv, tutorName, subject = [], location = [], grade = [] }) => {
  return (
    <Card id="tutor-detail">
      <div className="tutor-info">
        <div className="tutor-info-left">
          <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=8" className="avatar" />
        </div>
        <div className="tutor-info-right">
          <p>
            <SubHeading size={260} strong classNames="d-block">
              {tutorName}
            </SubHeading>
            <Caption classNames="color-text-secondary">{tutorEduLv?.educationLevel}</Caption>
          </p>
          {/* <p>
            <Paragraph>
              <StarFilled style={{ color: '#FFD103' }} />
              &nbsp;<b>{tutor.rating}</b>&nbsp;
            </Paragraph>
            <Paragraph classNames="color-text-secondary">/5.0 (06)</Paragraph>
          </p> */}
          <p>
            <Paragraph classNames="d-block color-text-secondary" strong>
              Subjects I teach
            </Paragraph>
            {subject.map(item => {
              return <Tag key={item.id}>{item.name}</Tag>;
            })}
          </p>
          <p>
            <Paragraph classNames="d-block color-text-secondary" strong>
              Desired tutoring grades
            </Paragraph>
            {grade.map(item => {
              return <Tag key={item.id}>{item.grade}</Tag>;
            })}
          </p>
          <p>
            <Paragraph classNames="d-block color-text-secondary" strong>
              Desired tutoring locations
            </Paragraph>
            {location.map(item => {
              return <Tag key={item.id}>{item.location}</Tag>;
            })}
          </p>
        </div>
      </div>
      <Divider dashed />
      <div className="btn-talk-container">
        {/* <Button size="large">
          <Caption strong size={160}>
            {textBtn}
          </Caption>
        </Button> */}
        <BaseButton type="primary" style={{ width: 'auto' }}>
          Book a tution
        </BaseButton>
      </div>
    </Card>
  );
};

export default TutorInfo;
