import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  termOfServiceModal: false,
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openTermOfServiceModal: state => {
      state.termOfServiceModal = true;
    },
    closeTermOfServiceModal: state => {
      state.termOfServiceModal = false;
    },
  },
});

export default modalSlice.reducer;
export const { openTermOfServiceModal, closeTermOfServiceModal } = modalSlice.actions;
