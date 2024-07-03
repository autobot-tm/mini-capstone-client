import { SubHeading } from '../../../../components/Typography/SubHeading/SubHeading';
import './styles.scss';
import { Avatar, Card, Divider, Tag } from 'antd';
import { Paragraph } from '../../../../components/Typography/Paragraph/Paragraph';
import { Caption } from '../../../../components/Typography/Caption/Caption';
import BaseButton from '../../../../components/Buttons/BaseButtons/BaseButton';
import { bookingTutorService } from '../../../../services/apis/booking.service';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

// const textBtn = "Let's task now";
const TutorInfo = ({ tutorId, tutorEduLv, tutorName, subject = [], location = [], grade = [], isBooking = [] }) => {
  const { token } = useSelector(state => state.auth);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  console.log('isBooking', isBooking?.[0]?.status);
  const handleBooking = async () => {
    if (!token) {
      navigate('/login');
      return;
    }
    setLoading(true);
    try {
      await bookingTutorService({ tutorId });
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
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
        {isBooking?.[0]?.status === 'PENDING' ? (
          <BaseButton type="text" style={{ width: 'auto' }} disabled={true}>
            In Processing
          </BaseButton>
        ) : (
          <BaseButton type="primary" style={{ width: 'auto' }} onClick={handleBooking} loading={loading}>
            {loading ? 'Booking..' : 'Book a tution'}
          </BaseButton>
        )}
      </div>
    </Card>
  );
};

export default TutorInfo;
