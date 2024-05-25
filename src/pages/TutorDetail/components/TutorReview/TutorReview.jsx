import './styles.scss';
import { Avatar, Divider, Rate } from 'antd';
import { SubHeading } from '../../../../components/Typography/SubHeading/SubHeading';
import { Paragraph } from '../../../../components/Typography/Paragraph/Paragraph';
import { Caption } from '../../../../components/Typography/Caption/Caption';

const TutorReview = () => {
  return (
    <>
      <SubHeading classNames="d-block" strong>
        Reviews(2)
      </SubHeading>
      <ReviewItem
        name="Bo"
        avatar="https://api.dicebear.com/7.x/miniavs/svg?seed=2"
        rating={4.5}
        description="Elit amet ut dui nam enim consectetur arcu amet varius. Viverra ac nisl quam nec justo, posuere suspendisse consequat. Sit aliquam purus mattis libero, pellentesque tellus sed amet pretium. Porttitor massa lectus dolor at enim. Ultricies varius diam elementum quis id eleifend. Eu vulputate urna, nulla dignissim ultrices."
      />
      <ReviewItem
        name="June"
        avatar="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
        rating={2}
        description="Elit amet ut dui nam enim consectetur arcu amet varius. Viverra ac nisl quam nec justo, posuere suspendisse consequat. Sit aliquam purus mattis libero, pellentesque tellus sed amet pretium. Porttitor massa lectus dolor at enim. Ultricies varius diam elementum quis id eleifend. Eu vulputate urna, nulla dignissim ultrices."
      />
    </>
  );
};

const ReviewItem = ({ name, avatar, rating, description }) => {
  return (
    <>
      <div className="review-item">
        <span className="avatar-section">
          <Avatar src={avatar} />
        </span>
        <span className="info-section">
          <Paragraph strong>{name}</Paragraph> <br />
          <Rate allowHalf defaultValue={rating} disabled className="rate" />
          <br /> <br />
          <Caption size={160}>{description}</Caption>
        </span>
      </div>
      <Divider />
    </>
  );
};

export default TutorReview;
