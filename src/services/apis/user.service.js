import { apiCaller } from '../../axios/client';
import { ENDPOINTS } from './api-endpoints.service';

export const updateUserByIdService = async ({ id, fullname, phone }) => {
  return await apiCaller.put(ENDPOINTS.users.update(id), { fullname, phone });
};
