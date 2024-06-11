export const APP_CONFIG = {
  BACKEND_URL: import.meta.env.VITE_BACKEND_BASE_URL || '',
  IS_DEV: import.meta.env.NODE_ENV === 'development',
  ENV: import.meta.env.VITE_ENV || '',
  GOOGLE_CLIENT_ID: import.meta.env.VITE_GOOGLE_CLIENT_ID || '',
  AUTH_DOMAIN: import.meta.env,
};
