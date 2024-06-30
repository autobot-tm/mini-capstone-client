import ReactPlayer from 'react-player';
import './styles.scss';
import { Avatar, Card, Tag } from 'antd';
import { SubHeading } from '../../../../../../components/Typography/SubHeading/SubHeading';
import { Caption } from '../../../../../../components/Typography/Caption/Caption';
import { Link } from 'react-router-dom';
import { WEEKDAYS } from '../../../../../../utils/time-slot';

const TutorCardRow = ({ id, name, brief, subject, schedule, eduLevel }) => {
  const maxItems = 5;
  const displayedSubjects = subject.slice(0, maxItems);
  const hasMore = subject.length > maxItems;
  const availableDays = new Set(schedule.map(record => record.weekDay.id));
  return (
    <Link to={`/tutors/${id}}`}>
      <Card id="tutor-card" hoverable>
        <div className="tutor-card-left">
          <ReactPlayer
            light
            controls={false}
            width="100%"
            height="100%"
            url="https://www.youtube.com/watch?v=JeOggtJH5n8"
          />
        </div>
        <div className="tutor-card-right">
          <section style={{ display: 'flex', alignItems: 'center' }}>
            <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=8" />
            <p>
              <SubHeading strong classNames="d-block">
                {name}
              </SubHeading>
              <Caption size={160} style={{ color: 'grey' }}>
                {eduLevel?.educationLevel}
              </Caption>
              {/* <Caption size={160}>
                <b>{rating}</b> <StarFilled style={{ color: '#FFD103' }} />
              </Caption> */}
            </p>
          </section>
          <p>
            <Caption strong>Availability</Caption>&nbsp;&nbsp;
            {WEEKDAYS.map(day => (
              <Tag key={day.id} color={availableDays.has(day.id) ? 'cyan' : undefined}>
                {day.day}
              </Tag>
            ))}
          </p>
          <Caption classNames="color-text-secondary description" size={160}>
            {brief}
          </Caption>
          <p className="tag-container">
            {displayedSubjects.map(item => (
              <Tag key={item.key}>{item.name}</Tag>
            ))}
            {hasMore && <Tag>...</Tag>}
          </p>
        </div>
      </Card>
    </Link>
  );
};

export default TutorCardRow;
