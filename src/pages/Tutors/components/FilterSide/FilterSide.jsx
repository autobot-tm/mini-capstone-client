import { Button, Checkbox, Form } from 'antd';
import BaseButton from '../../../../components/Buttons/BaseButtons/BaseButton';
import './styles.scss';
import { Paragraph } from '../../../../components/Typography/Paragraph/Paragraph';
import { Caption } from '../../../../components/Typography/Caption/Caption';
import { useState } from 'react';

const timeOptions = ['PRE 12PM', '12PM-5PM', 'AFTER 5PM'];
const dayOptions = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const FilterSide = () => {
  const [checkedTime, setCheckedTime] = useState('');
  const [checkedDay, setCheckedDay] = useState('');
  const [form] = Form.useForm();
  const onChangeDay = day => {
    setCheckedDay(day);
  };
  const onChangeTime = time => {
    setCheckedTime(time);
  };
  const handleClearFilters = () => {
    form.resetFields();
    setCheckedTime([]);
    setCheckedDay([]);
  };
  return (
    <div className="filter-side">
      <div className="filter-side-inner">
        <Form form={form} layout="horizontal">
          <Form.Item className="filter-side-inner-section">
            <Paragraph strong>Tutor availability</Paragraph>
            <Caption classNames="d-block" size={160} strong style={{ marginTop: 14 }}>
              Time of day
              <Caption>
                <Checkbox.Group
                  style={{ display: 'flex', flexDirection: 'column', gap: 12, padding: 8 }}
                  options={timeOptions}
                  value={checkedTime}
                  onChange={onChangeTime}
                />
              </Caption>
            </Caption>
            <Caption size={160} strong>
              Day of week
              <Caption>
                <Checkbox.Group
                  style={{ display: 'flex', flexDirection: 'column', gap: 12, padding: 8 }}
                  options={dayOptions}
                  value={checkedDay}
                  onChange={onChangeDay}
                />
              </Caption>
            </Caption>
          </Form.Item>

          <Form.Item className="filter-side-inner-section">
            <BaseButton type="text" style={{ padding: 0 }}>
              Apply filters
            </BaseButton>
            <Button type="text" className="clear-btn" onClick={handleClearFilters}>
              Clear all filters
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default FilterSide;
