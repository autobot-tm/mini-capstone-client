import { apiCaller } from '../../axios/client';
import { ENDPOINTS } from './api-endpoints.service';

export const bookingTutorService = ({ tutorId }) => {
  return apiCaller.post(ENDPOINTS.booking.base, { tutorId });
};
