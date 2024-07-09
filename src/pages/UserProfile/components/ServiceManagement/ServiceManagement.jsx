import { Tag, Pagination, Modal, Input, Rate, Empty, notification } from 'antd';
import './style.scss';
import { useEffect, useState } from 'react';
import {
  approveBookingService,
  complaintTutorService,
  getBookingsByIdStudentService,
  getBookingsByIdTutorService,
  getReviewByIdService,
  passBookingService,
  rejectBookingService,
  reviewTutorService,
} from '../../../../services/apis/booking.service';
import { SubHeading } from '../../../../components/Typography/SubHeading/SubHeading';
import { Caption } from '../../../../components/Typography/Caption/Caption';
import BaseButton from '../../../../components/Buttons/BaseButtons/BaseButton';
import { ArrowRightOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

const ServiceManagement = ({ id, role }) => {
  const navigate = useNavigate();
  const [bookings, setBookings] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [openReview, setOpenReview] = useState(false);
  const [openComplaint, setOpenComplaint] = useState(false);
  const [api, contextHolder] = notification.useNotification();
  const [reviewData, setReviewData] = useState({
    content: '',
    score: 0,
    tutorId: 0,
    bookingId: 0,
  });
  const [complaintData, setComplaintData] = useState({
    content: '',
    tutorEmail: '',
  });
  const pageSize = 5;

  const fetchTutorBooking = async () => {
    try {
      const response = await getBookingsByIdTutorService({ id });
      setBookings(response);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchStudentBooking = async () => {
    try {
      const response = await getBookingsByIdStudentService({ id });
      setBookings(response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (role === 'TUTOR' && id) {
      fetchTutorBooking();
    } else {
      fetchStudentBooking();
    }
  }, [role, id]);

  const handleApproveBooking = async bookingId => {
    try {
      await approveBookingService({ bookingId });
      role === 'TUTOR' ? await fetchTutorBooking() : await fetchStudentBooking();
    } catch (error) {
      console.log('Error at handleApproveBooking', error);
    }
  };

  const handleRejectBooking = async bookingId => {
    try {
      await rejectBookingService({ bookingId });
      role === 'TUTOR' ? await fetchTutorBooking() : await fetchStudentBooking();
    } catch (error) {
      console.log('Error at handleRejectBooking', error);
    }
  };

  const handlePassCourse = async bookingId => {
    try {
      await passBookingService({ bookingId });
      role === 'TUTOR' ? await fetchTutorBooking() : await fetchStudentBooking();
    } catch (error) {
      console.log('Error at handlePassCourse', error);
    }
  };

  const handlePageChange = page => {
    setCurrentPage(page);
  };

  const openReviewModal = async booking => {
    setReviewData({
      content: '',
      score: 0,
      tutorId: booking.tutor.id,
      bookingId: booking.booking.id,
    });
    try {
      await getReviewByIdService({ tutorId: booking.tutor.id });
    } catch (error) {
      console.log(error);
    }
    setOpenReview(true);
  };

  const openComplaintModal = booking => {
    setComplaintData({
      content: '',
      tutorEmail: booking.tutor.email,
    });
    setOpenComplaint(true);
  };

  const handleInputChange = e => {
    const { name, value } = e.target;
    setReviewData({
      ...reviewData,
      [name]: value,
    });
  };

  const handleComplaintInputChange = e => {
    const { name, value } = e.target;
    setComplaintData({
      ...complaintData,
      [name]: value,
    });
  };

  const handleScoreChange = value => {
    setReviewData({
      ...reviewData,
      score: value,
    });
  };

  const handleReview = async () => {
    const { content, score } = reviewData;
    if (!content || !score) {
      return api.warning({
        message: 'Review failed',
        description: 'Please input review',
        type: 'warning',
      });
    }
    try {
      await reviewTutorService(reviewData);
      setOpenReview(false);
      api.success({
        message: 'Review successful',
        type: 'success',
      });
    } catch (error) {
      api.error({
        message: 'Review failed',
        description: error,
        type: 'error',
      });
      console.log(error);
    }
  };

  const handleComplaint = async () => {
    const { content, tutorEmail } = complaintData;
    if (!content || !tutorEmail) {
      return api.warning({
        message: 'Complaint failed',
        description: 'Please input complaint details',
        type: 'warning',
      });
    }
    try {
      await complaintTutorService(complaintData);
      setOpenComplaint(false);
      api.success({
        message: 'Complaint submitted',
        type: 'success',
      });
    } catch (error) {
      api.error({
        message: 'Complaint failed',
        description: error,
        type: 'error',
      });
      console.log(error);
    }
  };

  const handleCancel = () => {
    setOpenReview(false);
    setOpenComplaint(false);
  };

  if (!bookings?.length) {
    return <Empty />;
  }

  const currentBookings = bookings.slice((currentPage - 1) * pageSize, currentPage * pageSize);

  return (
    <>
      {contextHolder}
      <div className="container-card-booking">
        {currentBookings.map(booking => (
          <div key={booking.id} className="card-booking">
            <section className="info">
              {role === 'TUTOR' ? (
                <>
                  <SubHeading>Student</SubHeading>
                  <Caption>Name: {booking.student.fullname}</Caption>
                  <Caption>Email: {booking.student.email}</Caption>
                  <Caption>Phone: {booking.student.phone || 'N/A'}</Caption>
                </>
              ) : (
                <>
                  <SubHeading>Tutor</SubHeading>
                  <Caption>Name: {booking.tutor.fullname}</Caption>
                  <Caption>Email: {booking.tutor.email}</Caption>
                  <Caption>Phone: {booking.tutor.phone || 'N/A'}</Caption>
                </>
              )}
            </section>
            <section className="action">
              {booking?.booking?.status === 'PENDING' ? (
                <Tag color="orange">{booking?.booking?.status}</Tag>
              ) : booking?.booking?.status === 'APPROVED' ? (
                <Tag color="blue">ACTIVED</Tag>
              ) : booking?.booking?.status === 'PASSED' ? (
                <Tag color="green">{booking?.booking?.status}</Tag>
              ) : booking?.booking?.status === 'FAILED' ? (
                <Tag color="magenta">{booking?.booking?.status}</Tag>
              ) : (
                <Tag color="red">{booking?.booking?.status}</Tag>
              )}

              <div className="container-action">
                {role === 'TUTOR' ? (
                  <>
                    {booking?.booking?.status === 'PENDING' ? (
                      <>
                        <BaseButton
                          type="primary"
                          style={{ width: 'auto', padding: '0 20px' }}
                          onClick={() => handleApproveBooking(booking.booking.id)}>
                          Accept
                        </BaseButton>
                        <BaseButton
                          style={{ width: 'auto', padding: '0 20px' }}
                          onClick={() => handleRejectBooking(booking.booking.id)}>
                          Reject
                        </BaseButton>
                      </>
                    ) : booking?.booking?.status !== 'PASSED' && booking?.booking?.status !== 'REJECTED' ? (
                      <BaseButton
                        style={{ width: 'auto', padding: '0 20px' }}
                        onClick={() => handlePassCourse(booking.booking.id)}>
                        Done
                      </BaseButton>
                    ) : (
                      ''
                    )}
                  </>
                ) : (
                  <>
                    {booking?.booking?.status === 'PASSED' || booking?.booking?.status === 'FAILED' ? (
                      <>
                        <BaseButton
                          type="primary"
                          style={{ width: 'auto', padding: '0 20px' }}
                          onClick={() => openReviewModal(booking)}>
                          Review
                        </BaseButton>
                        <BaseButton
                          style={{ width: 'auto', padding: '0 20px' }}
                          onClick={() => openComplaintModal(booking)}>
                          Complaint
                        </BaseButton>
                      </>
                    ) : booking?.booking?.status === 'PENDING' || booking?.booking?.status === 'APPROVED' ? (
                      <>
                        <BaseButton
                          style={{ width: 'auto', padding: '0 20px' }}
                          onClick={() => handleRejectBooking(booking.booking.id)}>
                          Reject
                        </BaseButton>
                      </>
                    ) : (
                      ''
                    )}
                    <BaseButton
                      style={{ width: 'auto', padding: '0 10px' }}
                      icon={<ArrowRightOutlined />}
                      onClick={() => navigate(`/tutors/${booking?.tutor?.id}`)}
                    />
                  </>
                )}
              </div>
            </section>
          </div>
        ))}
        <Pagination current={currentPage} pageSize={pageSize} total={bookings.length} onChange={handlePageChange} />
      </div>
      <Modal title="Review Tutor" open={openReview} onOk={handleReview} onCancel={handleCancel} width={400} centered>
        <form>
          <label>
            Description:
            <Input.TextArea
              name="content"
              value={reviewData.content}
              onChange={handleInputChange}
              style={{ width: '100%', minHeight: '100px', marginBottom: '10px' }}
            />
          </label>
          <label>
            Rate:
            <Rate name="score" value={reviewData.score} onChange={handleScoreChange} style={{ marginBottom: '10px' }} />
          </label>
        </form>
      </Modal>
      <Modal
        title="Complaint Tutor"
        open={openComplaint}
        onOk={handleComplaint}
        onCancel={handleCancel}
        width={400}
        centered>
        <form>
          <label>
            Description:
            <Input.TextArea
              name="content"
              value={complaintData.content}
              onChange={handleComplaintInputChange}
              style={{ width: '100%', minHeight: '100px', marginBottom: '10px' }}
            />
          </label>
        </form>
      </Modal>
    </>
  );
};

export default ServiceManagement;
