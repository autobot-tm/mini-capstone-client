import './styles.scss';
import { Avatar, Divider, Rate } from 'antd';
import { SubHeading } from '../../../../components/Typography/SubHeading/SubHeading';
import { Paragraph } from '../../../../components/Typography/Paragraph/Paragraph';
import { Caption } from '../../../../components/Typography/Caption/Caption';
import { useEffect, useState } from 'react';
import { getReviewByIdService } from '../../../../services/apis/booking.service';

const TutorReview = ({ id }) => {
  const [reviews, setReviews] = useState([]);
  console.log('id', id);
  const fetchReviews = async () => {
    try {
      const response = await getReviewByIdService({ tutorId: id });
      setReviews(response);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchReviews();
  }, []);
  return (
    <>
      <SubHeading classNames="d-block" strong>
        Reviews({reviews?.length})
      </SubHeading>
      {!reviews?.length ? (
        'No comment'
      ) : (
        <>
          <ReviewItem
            name="Bo"
            avatar="https://api.dicebear.com/7.x/miniavs/svg?seed=2"
            rating={4.5}
            description="Elit amet ut dui nam enim consectetur arcu amet varius. Viverra ac nisl quam nec justo, posuere suspendisse consequat. Sit aliquam purus mattis libero, pellentesque tellus sed amet pretium. Porttitor massa lectus dolor at enim. Ultricies varius diam elementum quis id eleifend. Eu vulputate urna, nulla dignissim ultrices."
          />
        </>
      )}
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
