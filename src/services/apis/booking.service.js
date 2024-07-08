import { apiCaller } from '../../axios/client';
import { ENDPOINTS } from './api-endpoints.service';

export const bookingTutorService = ({ tutorId }) => {
  return apiCaller.post(ENDPOINTS.booking.base, { tutorId });
};

export const getBookingByIdService = ({ id }) => {
  return apiCaller.get(ENDPOINTS.booking.detail(id));
};

export const getBookingsByIdTutorService = ({ id }) => {
  return apiCaller.get(ENDPOINTS.booking.idTutor(id));
};

export const getBookingsByIdStudentService = ({ id }) => {
  return apiCaller.get(ENDPOINTS.booking.idStudent(id));
};

export const approveBookingService = ({ bookingId }) => {
  return apiCaller.post(ENDPOINTS.booking.approve, { bookingId });
};

export const rejectBookingService = ({ bookingId }) => {
  return apiCaller.post(ENDPOINTS.booking.reject, { bookingId });
};

export const reviewTutorService = ({ content, score, tutorId, bookingId }) => {
  return apiCaller.post(ENDPOINTS.reviews.base, { content, score, tutorId, bookingId });
};

export const getReviewByIdService = ({ tutorId }) => {
  return apiCaller.get(ENDPOINTS.reviews.review(tutorId));
};

export const complaintTutorService = ({ content, tutorEmail }) => {
  return apiCaller.post(ENDPOINTS.complaints.complaint, { content, tutorEmail });
};
