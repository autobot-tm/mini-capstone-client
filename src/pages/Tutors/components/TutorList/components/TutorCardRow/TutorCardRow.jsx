import ReactPlayer from 'react-player';
import './styles.scss';
import { Avatar, Card, Tag } from 'antd';
import { SubHeading } from '../../../../../../components/Typography/SubHeading/SubHeading';
import { Caption } from '../../../../../../components/Typography/Caption/Caption';
import { StarFilled } from '@ant-design/icons';
import { Link } from 'react-router-dom';

const TutorCardRow = () => {
  return (
    <Link to={`/tutors/2}`}>
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
          <section>
            <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=8" />
            <p>
              <SubHeading strong classNames="d-block">
                Minh Thanh
              </SubHeading>
              <Caption size={160}>
                <b>5.0</b> <StarFilled style={{ color: '#FFD103' }} /> (06)
              </Caption>
            </p>
          </section>
          <p>
            <Caption strong>Availability</Caption>&nbsp;&nbsp;
            <Tag color="cyan">MON</Tag>
            <Tag color="cyan">TUE</Tag>
            <Tag color="cyan">WED</Tag>
            <Tag>THU</Tag>
            <Tag color="cyan">FRI</Tag>
            <Tag>SAR</Tag>
          </p>
          <Caption classNames="color-text-secondary" size={160}>
            On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and
            demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain
            and trouble
          </Caption>
          <p>
            <Tag>Mathematics</Tag>
            <Tag>Literature</Tag>
            <Tag>History</Tag>
            <Tag>Physics</Tag>
            <Tag>Chemistry</Tag>
            <Tag>English</Tag>
          </p>
        </div>
      </Card>
    </Link>
  );
};

export default TutorCardRow;
