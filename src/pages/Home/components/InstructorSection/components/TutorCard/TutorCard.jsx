import './styles.scss';
import { SafetyCertificateOutlined, StarFilled } from '@ant-design/icons';
import { Avatar, Card } from 'antd';
import Meta from 'antd/es/card/Meta';
import ReactPlayer from 'react-player/lazy';
import { Caption } from '../../../../../../components/Typography/Caption/Caption';
import { Link } from 'react-router-dom';

const TutorCard = ({ id, url, avatar, fullname, educationLevel, rating }) => {
  return (
    <Link to={`/tutors/${id}`}>
      <Card
        hoverable
        style={{
          width: '100%',
        }}
        cover={
          <div className="video">
            <ReactPlayer light controls={false} width="100%" height="100%" url={url} />
          </div>
        }>
        <Meta
          style={{ paddingBottom: 16 }}
          avatar={<Avatar src={avatar} />}
          title={
            <>
              {fullname} &nbsp; <SafetyCertificateOutlined />
            </>
          }
          description={
            <Caption>
              {rating} <StarFilled style={{ color: '#FFD103' }} />
            </Caption>
          }
        />
        <Caption classNames="description-tutor-card">
          <b>Education level:</b>
          <p>{educationLevel}</p>
        </Caption>
      </Card>
    </Link>
  );
};

export default TutorCard;
