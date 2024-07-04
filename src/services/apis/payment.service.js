import { apiCaller } from '../../axios/client';
import { ENDPOINTS } from './api-endpoints.service';

export const requestRechargeService = ({ amount }) => {
  return apiCaller.post(ENDPOINTS.payment.base, { amount });
};
