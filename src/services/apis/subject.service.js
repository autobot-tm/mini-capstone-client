import { apiCaller } from '../../axios/client';
import { ENDPOINTS } from './api-endpoints.service';

export const getAllSubjects = async () => {
  return await apiCaller.get(ENDPOINTS.subjects.base);
};

export const getAllLocations = async () => {
  return await apiCaller.get(ENDPOINTS.subjects.location);
};

export const getAllGrades = async () => {
  return await apiCaller.get(ENDPOINTS.subjects.grade);
};

export const getAllEducationLevel = async () => {
  return await apiCaller.get(ENDPOINTS.subjects.educationLevel);
};

export const getAllWeekDays = async () => {
  return await apiCaller.get(ENDPOINTS.subjects.weekDay);
};

export const getAllTeachingSlots = async () => {
  return await apiCaller.get(ENDPOINTS.subjects.teachingSlot);
};

export const createSubjectService = async ({
  educationLevelId,
  locationIds,
  subjectIds,
  gradeIds,
  dayAndSlotRequests,
  accountId,
  brief,
  tutorVideoUrl,
}) => {
  return await apiCaller.post(ENDPOINTS.subjects.register, {
    educationLevelId,
    locationIds,
    subjectIds,
    dayAndSlotRequests,
    gradeIds,
    accountId,
    brief,
    tutorVideoUrl,
  });
};

export const getAllTutor = async () => {
  return await apiCaller.get(ENDPOINTS.subjects.tutor);
};

export const updateSubjectService = async ({
  educationLevelId,
  locationIds,
  subjectIds,
  gradeIds,
  dayAndSlotRequests,
  accountId,
  brief,
  tutorVideoUrl,
}) => {
  return await apiCaller.put(ENDPOINTS.subjects.register, {
    educationLevelId,
    locationIds,
    subjectIds,
    gradeIds,
    dayAndSlotRequests,
    accountId,
    brief,
    tutorVideoUrl,
  });
};
