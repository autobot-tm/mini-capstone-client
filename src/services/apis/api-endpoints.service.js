export const ENDPOINTS = {
  auth: {
    base: '/api',
    login: '/api/login',
    register: '/api/register',
    changePassword: '/api/reset-password',
    google: '/api/login-google',
    requestResetPassword: '/api/forget-password',
    upRoleTutor: '/api/up-role',
  },
  users: {
    update: '/api/account',
    userId: id => `/api/account/${id}`,
  },
  subjects: {
    base: '/api/subject',
    subjectId: id => `/api/subject/${id}`,
    subjectName: name => `/api/subject/${name}`,
    location: '/api/location',
    grade: '/api/grade',
    educationLevel: '/api/education-level',
    weekDay: '/api/week-days',
    teachingSlot: '/api/teaching-slots',
    register: '/api/subject/register-for-tutor',
    tutor: '/api/approved-registration',
  },
};
