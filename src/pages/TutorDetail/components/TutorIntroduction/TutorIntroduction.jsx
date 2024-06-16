import './styles.scss';
import { Divider } from 'antd';
import { Paragraph } from '../../../../components/Typography/Paragraph/Paragraph';
import { SubHeading } from '../../../../components/Typography/SubHeading/SubHeading';
import ReactPlayer from 'react-player';
import ScheduleForm from '../../../../components/Schedule/ScheduleForm';

const TutorIntroduction = ({ tutorAvailability = [], description }) => {
  console.log(tutorAvailability);
  return (
    <>
      <SubHeading strong classNames="d-block">
        A brief introduction
      </SubHeading>
      <br />
      <Paragraph>{description}</Paragraph>
      <div className="video-container">
        <ReactPlayer
          light
          controls={false}
          width="100%"
          height="100%"
          url="https://www.youtube.com/watch?v=JeOggtJH5n8"
        />
      </div>
      <div className="schedule-table">
        <Divider />
        <SubHeading strong classNames="d-block">
          Availability
        </SubHeading>
        <br />
        <ScheduleForm initialSchedule={tutorAvailability} readOnly={true} />
      </div>
    </>
  );
};

export default TutorIntroduction;
