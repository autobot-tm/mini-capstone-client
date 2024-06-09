import { combineReducers } from '@reduxjs/toolkit';
import authReducer from './features/auth.slice';
import modalReducer from './features/modal.slice';
const rootReducer = combineReducers({
  auth: authReducer,
  modal: modalReducer,
});

export default rootReducer;
