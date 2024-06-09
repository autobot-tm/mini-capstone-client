import { combineReducers } from '@reduxjs/toolkit';
import authReducer from './features/auth.slice';
import userReducer from './features/user.slice';
import modalReducer from './features/modal.slice';
const rootReducer = combineReducers({
  auth: authReducer,
  user: userReducer,
  modal: modalReducer,
});

export default rootReducer;
