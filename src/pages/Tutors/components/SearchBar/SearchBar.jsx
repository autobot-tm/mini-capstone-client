import './styles.scss';
import { SearchOutlined } from '@ant-design/icons';
import { Button, Form, Input, Select, Space } from 'antd';
import FROM from '../../../../assets/images/startForm.png';
import { Caption } from '../../../../components/Typography/Caption/Caption';

const SearchBar = () => {
  return (
    <div className="search-section">
      <Form className="search-section-form">
        <Space.Compact size="large" className="search-section-form-inner">
          <Input
            style={{
              width: '65%',
            }}
            addonBefore={<SearchOutlined style={{ color: '#999999', fontSize: 20 }} />}
            placeholder="What are you looking for?"
          />
          <Select
            style={{
              width: '25%',
            }}
            placeholder="Select category"
          />
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
