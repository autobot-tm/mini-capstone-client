import { useState, useEffect } from 'react';
import { Table, Checkbox } from 'antd';
import { getAllTeachingSlots, getAllWeekDays } from '../../services/apis/subject.service';

const ScheduleTable = ({ onChange }) => {
  const [weekDays, setWeekDays] = useState([]);
  const [teachingSlots, setTeachingSlots] = useState([]);
  const [schedule, setSchedule] = useState([]);

  useEffect(() => {
    const fetchWeekDays = async () => {
      const response = await getAllWeekDays();
      setWeekDays(response);
    };

    const fetchTeachingSlots = async () => {
      const response = await getAllTeachingSlots();
      setTeachingSlots(response);
    };

    fetchWeekDays();
    fetchTeachingSlots();
  }, []);

  const handleCheckboxChange = (weekDayId, slotId, checked) => {
    let newSchedule = [...schedule];
    const dayIndex = newSchedule.findIndex(day => day.weekDayIds === weekDayId);

    if (dayIndex === -1 && checked) {
      newSchedule.push({ weekDayIds: weekDayId, teachingSlotIds: [slotId] });
    } else if (dayIndex !== -1) {
      if (checked) {
        newSchedule[dayIndex].teachingSlotIds.push(slotId);
      } else {
        newSchedule[dayIndex].teachingSlotIds = newSchedule[dayIndex].teachingSlotIds.filter(id => id !== slotId);
        if (newSchedule[dayIndex].teachingSlotIds.length === 0) {
          newSchedule = newSchedule.filter(day => day.weekDayIds !== weekDayId);
        }
      }
    }

    setSchedule(newSchedule);
    onChange(newSchedule);
  };

  const renderCheckbox = (weekDayId, slotId) => {
    const isChecked = schedule.some(day => day.weekDayIds === weekDayId && day.teachingSlotIds.includes(slotId));
    return <Checkbox checked={isChecked} onChange={e => handleCheckboxChange(weekDayId, slotId, e.target.checked)} />;
  };

  const columns = [
    {
      title: 'Time Slot',
      dataIndex: 'slot',
      key: 'slot',
      align: 'center',
      render: (_, record) => teachingSlots.find(slot => slot.id === record.slotId)?.time,
    },
    ...weekDays.map(day => ({
      title: day.day,
      dataIndex: day.id,
      key: day.id,
      align: 'center',
      render: (_, record) => renderCheckbox(day.id, record.slotId),
    })),
  ];

  const dataSource = teachingSlots.map(slot => ({
    key: slot.id,
    slotId: slot.id,
  }));

  return (
    <div>
      <Table dataSource={dataSource} columns={columns} pagination={false} rowKey="slotId" bordered />
    </div>
  );
};

export default ScheduleTable;
