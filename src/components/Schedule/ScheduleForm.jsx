import { useState, useEffect } from 'react';
import { Table, Checkbox } from 'antd';
import { CheckOutlined } from '@ant-design/icons';
import SUNRISE from '../../assets/images/wi--sunrise.png';
import SUNSET from '../../assets/images/wi--sunset.png';
import SUNNY from '../../assets/images/wi--day-sunny.png';
import './styles.scss';

const ScheduleForm = ({ tutorAvailability = {}, initialSchedule = {}, onChange = () => {}, isEditable = true }) => {
  const [schedule, setSchedule] = useState(initialSchedule);

  useEffect(() => {
    if (isEditable) {
      onChange(schedule, countSelectedSlots(schedule));
    }
  }, [schedule]);

  const countSelectedSlots = schedule => {
    let count = 0;
    Object.keys(schedule).forEach(timeSlot => {
      Object.keys(schedule[timeSlot]).forEach(day => {
        if (schedule[timeSlot][day]) count++;
      });
    });
    return count;
  };

  const handleCheckboxChange = (timeSlot, day) => {
    const newSchedule = {
      ...schedule,
      [timeSlot]: {
        ...schedule[timeSlot],
        [day]: !schedule[timeSlot][day],
      },
    };
    setSchedule(newSchedule);
  };

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
    ...['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'].map(day => ({
      title: day.toUpperCase().slice(0, 3),
      dataIndex: day,
      key: day,
      align: 'center',
      render: (value, record) =>
        isEditable ? (
          <Checkbox
            checked={schedule[record.key][day]}
            onChange={() => handleCheckboxChange(record.key, day)}
            disabled={tutorAvailability[record.key] && !tutorAvailability[record.key][day]} // Disable checkbox if tutor is not available
          />
        ) : (
          <BooleanCell value={tutorAvailability[record.key][day]} />
        ),
    })),
  ];

  const scheduleData = [
    {
      key: 'morning',
      time: (
        <span className="time-container">
          <img src={SUNRISE} alt="Sunrise" />
          PRE 12PM
        </span>
      ),
      ...schedule.morning,
    },
    {
      key: 'afternoon',
      time: (
        <span className="time-container">
          <img src={SUNNY} alt="Sunny" />
          12PM-5PM
        </span>
      ),
      ...schedule.afternoon,
    },
    {
      key: 'evening',
      time: (
        <span className="time-container">
          <img src={SUNSET} alt="Sunset" />
          AFTER 5PM
        </span>
      ),
      ...schedule.evening,
    },
  ];

  return (
    <Table style={{ textAlign: 'center' }} dataSource={scheduleData} columns={columns} bordered pagination={false} />
  );
};

export default ScheduleForm;
