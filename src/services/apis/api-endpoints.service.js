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
  },
  subjects: {
    base: '/api/subject',
    subjectId: id => `/api/subject/${id}`,
    subjectName: name => `/api/subject/${name}`,
  },
};
