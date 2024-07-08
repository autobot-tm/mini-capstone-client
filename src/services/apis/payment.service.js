import { apiCaller } from '../../axios/client';
import { ENDPOINTS } from './api-endpoints.service';

export const getWalletTutorService = ({ id }) => {
  return apiCaller.get(ENDPOINTS.payment.wallet(id));
};

export const requestRechargeService = ({ amount }) => {
  return apiCaller.post(ENDPOINTS.payment.base, { amount });
};

export const updateWalletService = ({ tutorId, money }) => {
  return apiCaller.put(ENDPOINTS.payment.update, { tutorId, money });
};

export const requestBuyPackageService = ({ accountId }) => {
  return apiCaller.post(ENDPOINTS.payment.package, { accountId });
};
