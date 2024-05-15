import { Button } from 'antd';
import './styles.scss';

const BaseButton = ({ children, type, htmlType, disabled, ...props }) => {
  return (
    <Button
      className="base-button"
      type={type}
      htmlType={htmlType}
      disabled={disabled}
      loading={disabled}
      size="large"
      {...props}>
      {children}
    </Button>
  );
};

export default BaseButton;
