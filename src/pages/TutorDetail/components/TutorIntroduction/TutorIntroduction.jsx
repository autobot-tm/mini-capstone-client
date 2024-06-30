import './styles.scss';
import { Divider } from 'antd';
import { Paragraph } from '../../../../components/Typography/Paragraph/Paragraph';
import { SubHeading } from '../../../../components/Typography/SubHeading/SubHeading';
import ReactPlayer from 'react-player';
import ScheduleAvalablity from '../../../../components/Schedule/ScheduleAvalablity';
import { TEACHINGSLOTS, WEEKDAYS } from '../../../../utils/time-slot';

const TutorIntroduction = ({ tutorAvailability = [], description }) => {
  return (
    <>
      <SubHeading strong classNames="d-block">
        A brief introduction
      </SubHeading>
      <br />
      <Paragraph className="description">{description}</Paragraph>
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
        <ScheduleAvalablity initialSchedule={tutorAvailability} weekDays={WEEKDAYS} teachingSlots={TEACHINGSLOTS} />
      </div>
    </>
  );
};

export default TutorIntroduction;
