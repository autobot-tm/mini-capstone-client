import './styles.scss';
import { Divider, Table } from 'antd';
import { Paragraph } from '../../../../components/Typography/Paragraph/Paragraph';
import { SubHeading } from '../../../../components/Typography/SubHeading/SubHeading';
import { CheckOutlined } from '@ant-design/icons';
import ReactPlayer from 'react-player';
import SUNRISE from '../../../../assets/images/wi--sunrise.png';
import SUNSET from '../../../../assets/images/wi--sunset.png';
import SUNNY from '../../../../assets/images/wi--day-sunny.png';

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
      <Divider />
      <SubHeading strong classNames="d-block">
        Availability
      </SubHeading>
      <br />
      <ScheduleTable />
    </>
  );
};

const ScheduleTable = () => {
  const scheduleData = [
    {
      key: 'morning',
      time: (
        <span className="time-container">
          <img src={SUNRISE} alt="Sunrise" />
          PRE 12PM
        </span>
      ),
      monday: true,
      tuesday: false,
      wednesday: true,
      thursday: true,
      friday: false,
      saturday: false,
      sunday: false,
    },
    {
      key: 'afternoon',
      time: (
        <span className="time-container">
          <img src={SUNNY} alt="Sunny" />
          12PM-5PM
        </span>
      ),
      monday: false,
      tuesday: true,
      wednesday: false,
      thursday: true,
      friday: true,
      saturday: true,
      sunday: false,
    },
    {
      key: 'evening',
      time: (
        <span className="time-container">
          <img src={SUNSET} alt="Sunset" />
          AFTER 5PM
        </span>
      ),
      monday: true,
      tuesday: true,
      wednesday: true,
      thursday: false,
      friday: false,
      saturday: true,
      sunday: false,
    },
  ];

  const BooleanCell = ({ value }) => (
    <div className="boolean-cell">{value ? <CheckOutlined style={{ color: 'green' }} /> : '-'}</div>
  );

  const columns = [
    {
      title: 'Time',
      dataIndex: 'time',
      key: 'time',
      align: 'center',
    },
    {
      title: 'MON',
      dataIndex: 'monday',
      key: 'monday',
      align: 'center',
      render: value => <BooleanCell value={value} />,
    },
    {
      title: 'TUE',
      dataIndex: 'tuesday',
      key: 'tuesday',
      align: 'center',
      render: value => <BooleanCell value={value} />,
    },
    {
      title: 'WED',
      dataIndex: 'wednesday',
      key: 'wednesday',
      align: 'center',
      render: value => <BooleanCell value={value} />,
    },
    {
      title: 'THU',
      dataIndex: 'thursday',
      key: 'thursday',
      align: 'center',
      render: value => <BooleanCell value={value} />,
    },
    {
      title: 'FRI',
      dataIndex: 'friday',
      key: 'friday',
      align: 'center',
      render: value => <BooleanCell value={value} />,
    },
    {
      title: 'SAT',
      dataIndex: 'saturday',
      key: 'saturday',
      align: 'center',
      render: value => <BooleanCell value={value} />,
    },
    {
      title: 'SUN',
      dataIndex: 'sunday',
      key: 'sunday',
      align: 'center',
      render: value => <BooleanCell value={value} />,
    },
  ];
  return (
    <Table style={{ textAlign: 'center' }} dataSource={scheduleData} columns={columns} bordered pagination={false} />
  );
};

export default TutorIntroduction;
