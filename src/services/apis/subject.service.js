import { apiCaller } from '../../axios/client';
import { ENDPOINTS } from './api-endpoints.service';

export const getAllSubjects = async () => {
  return await apiCaller.get(ENDPOINTS.subjects.base);
};

export const createSubjectService = async ({ name, grade, tutorSchedules }) => {
  console.log({ name, grade, tutorSchedules });
  return await apiCaller.post(ENDPOINTS.subjects.base, { name, grade, tutorSchedules });
};
