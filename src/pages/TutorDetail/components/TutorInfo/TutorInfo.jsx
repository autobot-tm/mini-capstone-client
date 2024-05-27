import { StarFilled } from '@ant-design/icons';
import { SubHeading } from '../../../../components/Typography/SubHeading/SubHeading';
import './styles.scss';
import { Avatar, Button, Card, Divider, Tag } from 'antd';
import { Paragraph } from '../../../../components/Typography/Paragraph/Paragraph';
import { Caption } from '../../../../components/Typography/Caption/Caption';
import BaseButton from '../../../../components/Buttons/BaseButtons/BaseButton';

const textBtn = "Let's task now";
const TutorInfo = () => {
  return (
    <Card id="tutor-detail">
      <div className="tutor-info">
        <div className="tutor-info-left">
          <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=8" className="avatar" />
        </div>
        <div className="tutor-info-right">
          <p>
            <SubHeading strong classNames="d-block">
              Minh Thanh
            </SubHeading>
            <Caption classNames="color-text-secondary">Masters in Political Science</Caption>
          </p>
          <p>
            <Paragraph>
              <StarFilled style={{ color: '#FFD103' }} />
              &nbsp;<b>5.0</b>&nbsp;
            </Paragraph>
            <Paragraph classNames="color-text-secondary">/5.0 (06)</Paragraph>
          </p>
          <p>
            <Paragraph classNames="d-block color-text-secondary" style={{ paddingBottom: 10 }} strong>
              Subjects I teach
            </Paragraph>
            <Tag>Mathematics</Tag>
            <Tag>Literature</Tag>
            <Tag>History</Tag>
            <Tag>Physics</Tag>
            <Tag>Chemistry</Tag>
            <Tag>English</Tag>
          </p>
        </div>
      </div>
      <Divider dashed />
      <div className="btn-talk-container">
        <Button size="large">
          <Caption strong size={160}>
            {textBtn}
          </Caption>
        </Button>
        <BaseButton type="primary" style={{ width: 'auto' }}>
          Book a tution
        </BaseButton>
      </div>
    </Card>
  );
};

export default TutorInfo;
