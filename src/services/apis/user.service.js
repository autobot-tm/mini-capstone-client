import { apiCaller } from '../../axios/client';
import { ENDPOINTS } from './api-endpoints.service';

export const updateUserByIdService = async ({ fullname, phone }) => {
  return await apiCaller.put(ENDPOINTS.users.update, { fullname, phone });
};

export const getUserByIdService = async ({ id }) => {
  return await apiCaller.get(ENDPOINTS.users.userId(id));
};
