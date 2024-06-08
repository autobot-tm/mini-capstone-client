export const validateFullName = (_, value) => {
  if (!value) {
    return Promise.reject(new Error('Please input your full name!'));
  }
  if (value.trimLeft() !== value) {
    return Promise.reject(new Error('Full name cannot have leading spaces!'));
  }
  if (/\d/.test(value)) {
    return Promise.reject(new Error('Full name cannot contain numbers!'));
  }
  if (/[^\w\s]/.test(value)) {
    return Promise.reject(new Error('Full name cannot contain special characters!'));
  }
  return Promise.resolve();
};

export const validatePhoneNumber = (_, value) => {
  if (!value) {
    return Promise.reject(new Error('Please input your phone number!'));
  }
  if (/[^\d\s+-]/.test(value)) {
    return Promise.reject(new Error('Phone number cannot contain special characters!'));
  }
  if (/[a-zA-Z]/.test(value)) {
    return Promise.reject(new Error('Phone number cannot contain letters!'));
  }
  if (/\s/.test(value)) {
    return Promise.reject(new Error('Phone number cannot contain spaces!'));
  }
  return Promise.resolve();
};
