import axios from 'axios';
import { APP_CONFIG } from '../config/app.config';
import { REQUEST_TIME_OUT } from '../constants/api.constant';

export const apiCaller = axios.create({
  baseURL: APP_CONFIG.BACKEND_URL,
  timeout: REQUEST_TIME_OUT,
  headers: {
    'Content-Type': 'application/json',
  },
});
export const configureApiCaller = store => {
  apiCaller.interceptors.response.use(
    response => {
      return response?.data;
    },
    async error => {
      const statusCode = error?.response?.status;
      const message = error?.response?.data;
      console.log('error', {
        statusCode,
        message,
      });
      return Promise.reject(message);
    },
  );

  apiCaller.interceptors.request.use(async config => {
    const auth = store.getState().auth;
    let token = auth?.token;
    if (!token) {
      const urlParams = new URLSearchParams(window.location.search);
      token = urlParams.get('token');
    }
    const isValidToken = token => {
      if (!token) return false;
      //token structure chia 3 part
      const parts = token.split('.');
      if (parts.length !== 3) return false;
      return true;
    };
    if (isValidToken(token)) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  });
};
