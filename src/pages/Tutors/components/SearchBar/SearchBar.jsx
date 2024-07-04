import './styles.scss';
import { SearchOutlined } from '@ant-design/icons';
import { Button, Form, Input, Select, Space } from 'antd';
import FROM from '../../../../assets/images/startForm.png';
import { Caption } from '../../../../components/Typography/Caption/Caption';

const { Option } = Select;

const SearchBar = ({ onSearch }) => {
  const [form] = Form.useForm();

  const handleSearch = () => {
    form.validateFields().then(values => {
      onSearch(values);
    });
  };

  return (
    <div className="search-section">
      <Form form={form} className="search-section-form" onFinish={handleSearch}>
        <Space.Compact size="large" className="search-section-form-inner">
          <Form.Item name="tutorName" noStyle>
            <Input
              style={{
                width: '65%',
              }}
              addonBefore={<SearchOutlined style={{ color: '#999999', fontSize: 20 }} />}
              placeholder="What are you looking for?"
            />
          </Form.Item>
          <Form.Item name="educationLevel" noStyle>
            <Select
              style={{
                width: '25%',
              }}
              placeholder="Select education level"
              allowClear>
              <Option value="Student">High School</Option>
              <Option value="Bachelor">Bachelor</Option>
              <Option value="Master">Master</Option>
              <Option value="Ph.D">Ph.D</Option>
            </Select>
          </Form.Item>
          <Button className="btn" type="text" htmlType="submit">
            Search now
          </Button>
        </Space.Compact>
        <div className="icon-section">
          <figure>
            <img src={FROM} alt="from" />
          </figure>
          <Caption size={160} classNames="start-from">
            Start from here
          </Caption>
        </div>
      </Form>
    </div>
  );
};

export default SearchBar;
