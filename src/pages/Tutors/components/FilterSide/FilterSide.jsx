import { Button, Checkbox, Form } from 'antd';
import BaseButton from '../../../../components/Buttons/BaseButtons/BaseButton';
import './styles.scss';
import { Paragraph } from '../../../../components/Typography/Paragraph/Paragraph';
import { Caption } from '../../../../components/Typography/Caption/Caption';
import { useState } from 'react';
import SUNRISE from '../../../../assets/images/wi--sunrise.png';
import SUNSET from '../../../../assets/images/wi--sunset.png';
import SUNNY from '../../../../assets/images/wi--day-sunny.png';

const dayOptions = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const FilterSide = () => {
  const [checkedDay, setCheckedDay] = useState('');
  const [checkedTime, setCheckedTime] = useState([]);
  const [form] = Form.useForm();
  const onChangeDay = day => {
    setCheckedDay(day);
  };
  const onChangeTime = checkedValues => {
    setCheckedTime(checkedValues);
  };
  const onFinish = values => {
    console.log('Success:', values);
    handleClearFilters();
  };
  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };
  const handleClearFilters = () => {
    form.resetFields();
    setCheckedDay([]);
    setCheckedTime([]);
  };
  return (
    <div className="filter-side">
      <div className="filter-side-inner">
        <Form onFinish={onFinish} onFinishFailed={onFinishFailed} form={form} layout="horizontal">
          <Form.Item name="time" className="filter-side-inner-section">
            <div>
              <Paragraph strong>Tutor availability</Paragraph>
              <Caption classNames="d-block" size={160} strong style={{ marginTop: 14 }}>
                Time of day
              </Caption>
              <Checkbox.Group className="checkbox-gr" value={checkedTime} onChange={onChangeTime}>
                <Checkbox value="morning">
                  <img src={SUNRISE} alt="Sunrise" />
                  PRE 12PM
                </Checkbox>
                <Checkbox value="afternoon">
                  <img src={SUNNY} alt="Sunny" />
                  12PM-5PM
                </Checkbox>
                <Checkbox value="evening">
                  <img src={SUNSET} alt="Sunset" />
                  AFTER 5PM
                </Checkbox>
              </Checkbox.Group>
            </div>
          </Form.Item>
          <Form.Item name="day" className="filter-side-inner-section">
            <div>
              <Caption size={160} strong>
                Day of week
              </Caption>
              <Checkbox.Group className="checkbox-gr" options={dayOptions} value={checkedDay} onChange={onChangeDay} />
            </div>
          </Form.Item>
          <Form.Item className="filter-side-inner-section">
            <BaseButton type="primary" style={{ padding: 0 }} htmlType="submit">
              Apply filters
            </BaseButton>
            <Button className="clear-btn" onClick={handleClearFilters}>
              Clear all filters
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default FilterSide;
