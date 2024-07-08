import { Button, Tag } from 'antd';
import './style.scss';
import { useEffect, useState } from 'react';
import {
  approveBookingService,
  getBookingByIdService,
  getBookingsByIdStudentService,
  getBookingsByIdTutorService,
  rejectBookingService,
} from '../../../../services/apis/booking.service';
import { SubHeading } from '../../../../components/Typography/SubHeading/SubHeading';
import { Caption } from '../../../../components/Typography/Caption/Caption';
import BaseButton from '../../../../components/Buttons/BaseButtons/BaseButton';
import { ArrowRightOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

const ServiceManagement = ({ id, role }) => {
  const navigate = useNavigate();
  console.log(id);
  const [booking, setBooking] = useState(null);
  const fetchTutorBooking = async () => {
    try {
      const response = await getBookingsByIdTutorService({ id });
      console.log(response);
      setBooking(response);
    } catch (error) {
      console.log(error);
    }
  };
  const fetchStudentBooking = async () => {
    try {
      const response = await getBookingsByIdStudentService({ id });
      console.log(response);
      setBooking(response);
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
  }, []);
  console.log('booking', booking);
  const handleApproveBooking = async ({ bookingId }) => {
    try {
      await approveBookingService({ bookingId });
    } catch (error) {
      console.log('Error at handleApproveBooking', error);
    }
  };

  const handleRejectBooking = async ({ bookingId }) => {
    try {
      await rejectBookingService({ bookingId });
    } catch (error) {
      console.log('Error at handleRejectBooking', error);
    }
  };
  if (!booking) {
    return 'loading..';
  }

  return (
    <div className="card-booking">
      <section className="info">
        {role === 'TUTOR' ? (
          <>
            <SubHeading>Student</SubHeading>
            <Caption>Name: Nguyễn Minh Thành</Caption>
            <Caption>Email: student@gmail.com</Caption>
            <Caption>Phone: 0843104070</Caption>
          </>
        ) : (
          <>
            <SubHeading>TUTOR</SubHeading>
            <Caption>Name: TUTOR</Caption>
            <Caption>Email: tutor@gmail.com</Caption>
            <Caption>Phone: 099999999</Caption>
          </>
        )}
      </section>
      <section className="action">
        <Tag color="green">PENDING</Tag>
        <div className="container-action">
          {role === 'TUTO' ? (
            <>
              <BaseButton type="primary" style={{ width: 'auto', padding: '0 20px' }} onClick={handleApproveBooking()}>
                Accept
              </BaseButton>
              <BaseButton style={{ width: 'auto', padding: '0 20px' }} onClick={handleRejectBooking()}>
                Reject
              </BaseButton>
            </>
          ) : (
            <>
              <BaseButton type="primary" style={{ width: 'auto', padding: '0 20px' }} onClick={handleApproveBooking()}>
                Review
              </BaseButton>
              <BaseButton style={{ width: 'auto', padding: '0 20px' }} onClick={handleRejectBooking()}>
                Complaint
              </BaseButton>
              <BaseButton
                style={{ width: 'auto', padding: '0 10px' }}
                icon={<ArrowRightOutlined />}
                onClick={() => navigate(`/tutors/${id}`)}
              />
            </>
          )}
        </div>
      </section>

      {/* <section className="info">
        <SubHeading>Student</SubHeading>
        <Caption>Name: {student.fullname}</Caption>
        <Caption>Email: {student.email}</Caption>
        <Caption>Phone: {student.phone || 'N/A'}</Caption>
      </section>
      <section className="action">
        <Tag color="green">{bookingDetail?.status}</Tag>
        <div className="container-action">
          <BaseButton type="primary" style={{ width: 'auto', padding: '0 20px' }} onClick={handleApproveBooking}>
            Accept
          </BaseButton>
          <BaseButton style={{ width: 'auto', padding: '0 20px' }} onClick={handleRejectBooking}>
            Reject
          </BaseButton>
        </div>
      </section> */}
    </div>
  );
};

export default ServiceManagement;
