import apiCaller from '../../axios/client';
import { ENDPOINTS } from './api-endpoints.service';

/**
 * Sign in service.
 * @param {Object} input - The input object.
 * @param {string} input.phone - The email.
 * @param {string} input.password - The password.
 * @returns {Promise} - The promise of the API call.
 */
export const signInService = ({ phone, password }) => {
  return apiCaller.post(ENDPOINTS.auth.login, { phone, password });
};

/**
 * Sign up service.
 * @param {Object} input - The input object.
 * @param {string} input.email - The email.
 * @param {string} input.password - The password.
 * @returns {Promise} - The promise of the API call.
 */
export const signUpService = ({ phone, password }) => {
  return apiCaller.post(ENDPOINTS.auth.register, { phone, password });
};
