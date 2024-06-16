import { useState, useEffect } from 'react';
import { Table, Checkbox } from 'antd';
import SUNRISE from '../../assets/images/wi--sunrise.png';
import SUNSET from '../../assets/images/wi--sunset.png';
import SUNNY from '../../assets/images/wi--day-sunny.png';
import './styles.scss';
import { CheckOutlined } from '@ant-design/icons';

const weekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
const teachingTimes = ['morning', 'afternoon', 'evening'];

const timeLabels = {
  morning: (
    <span className="time-container">
      <img src={SUNRISE} alt="Sunrise" />
      PRE 12PM
    </span>
  ),
  afternoon: (
    <span className="time-container">
      <img src={SUNNY} alt="Sunny" />
      12PM-5PM
    </span>
  ),
  evening: (
    <span className="time-container">
      <img src={SUNSET} alt="Sunset" />
      AFTER 5PM
    </span>
  ),
};

const getDayLabel = day => {
  return day.substring(0, 3).toUpperCase();
};

const BooleanCell = ({ value }) => (
  <div className="boolean-cell">{value ? <CheckOutlined style={{ color: 'green' }} /> : '-'}</div>
);

const ScheduleForm = ({ initialSchedule, onChange, readOnly }) => {
  const [schedules, setSchedules] = useState(initialSchedule);

  useEffect(() => {
    onChange && onChange(schedules);
  }, [schedules]);

  const handleCheckboxChange = (day, time) => {
    if (!readOnly) {
      setSchedules(prevSchedules => {
        const newSchedules = { ...prevSchedules };
        if (!newSchedules[day]) {
          newSchedules[day] = [];
        }
        if (newSchedules[day].includes(time)) {
          newSchedules[day] = newSchedules[day].filter(t => t !== time);
        } else {
          newSchedules[day].push(time);
        }
        return newSchedules;
      });
    }
  };

  const columns = [
    { title: 'Time/Day', dataIndex: 'timeLabel', key: 'timeLabel', align: 'center' },
    ...weekDays.map(day => ({
      title: getDayLabel(day),
      dataIndex: day,
      key: day,
      align: 'center',
      render: (_, record) => {
        if (readOnly) {
          return <BooleanCell value={record[day]?.includes(record.time)} />;
        } else {
          return (
            <Checkbox
              checked={record[day]?.includes(record.time)}
              onChange={() => handleCheckboxChange(day, record.time)}
              disabled={readOnly}
            />
          );
        }
      },
    })),
  ];

  const dataSource = teachingTimes.map(time => ({
    key: time,
    timeLabel: timeLabels[time],
    time,
    ...weekDays.reduce((acc, day) => ({ ...acc, [day]: schedules[day] || [] }), {}),
  }));

  return <Table dataSource={dataSource} columns={columns} pagination={false} bordered />;
};

export default ScheduleForm;
