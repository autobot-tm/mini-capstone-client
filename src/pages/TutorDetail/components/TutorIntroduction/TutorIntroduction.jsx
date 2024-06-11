import './styles.scss';
import { Divider } from 'antd';
import { Paragraph } from '../../../../components/Typography/Paragraph/Paragraph';
import { SubHeading } from '../../../../components/Typography/SubHeading/SubHeading';
import ReactPlayer from 'react-player';
import ScheduleForm from '../../../../components/Schedule/ScheduleForm';

const tutorAvailability = {
  morning: {
    monday: true,
    tuesday: false,
    wednesday: true,
    thursday: true,
    friday: false,
    saturday: false,
    sunday: false,
  },
  afternoon: {
    monday: false,
    tuesday: true,
    wednesday: false,
    thursday: true,
    friday: true,
    saturday: true,
    sunday: false,
  },
  evening: {
    monday: true,
    tuesday: true,
    wednesday: true,
    thursday: false,
    friday: false,
    saturday: true,
    sunday: false,
  },
};
const TutorIntroduction = () => {
  return (
    <>
      <SubHeading strong classNames="d-block">
        A brief introduction
      </SubHeading>
      <br />
      <Paragraph>
        On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by
        the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that
        are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is
        the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to
        distinguish.
        <br /> <br />
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem antium doloremque laudantium, totam rem aperiam,
        eaque ipsa quae ab illo inventore veritatis et quasi architecto.
      </Paragraph>
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
        <ScheduleForm tutorAvailability={tutorAvailability} isEditable={false} />
      </div>
    </>
  );
};

export default TutorIntroduction;
