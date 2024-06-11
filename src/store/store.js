import { configureStore } from '@reduxjs/toolkit';
import modalReducer from './features/modal.slice';
import { authReducer } from './features/auth.slice';
import { userReducer } from './features/user.slice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer,
    modal: modalReducer,
  },
});
