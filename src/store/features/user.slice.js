import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { updateUserByIdService } from '../../services/apis/user.service';

const createInitialState = () => {
  const initialState = {
    loading: false,
    error: null,
    success: false,
  };
  return initialState;
};
export const initialState = createInitialState();

export const updateUserProfile = createAsyncThunk(
  'user/updateUserProfile',
  async ({ fullname, phone }, { rejectWithValue, getState }) => {
    try {
      const { auth } = getState();
      const { user } = auth;
      const { id } = user;
      const response = await updateUserByIdService({ id, fullname, phone });
      console.log(response);
      return { ...response };
    } catch (error) {
      console.warn('🚀 ~ file: user.slice. updateUserProfile ~ error:', error);
      return rejectWithValue(error);
    }
  },
);

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    clearError(state) {
      state.error = null;
    },
    clearSuccess(state) {
      state.success = false;
    },
  },
  extraReducers(builder) {
    builder.addCase(updateUserProfile.pending, state => ({
      ...state,
      user: '',
      success: false,
      loading: true,
    }));
    builder.addCase(updateUserProfile.fulfilled, (state, { payload }) => ({
      ...state,
      user: payload,
      loading: false,
      success: true,
    }));
    builder.addCase(updateUserProfile.rejected, (state, { payload }) => ({
      ...state,
      loading: false,
      success: false,
      error: payload,
    }));
  },
});

const { actions, reducer } = userSlice;
export const userReducer = reducer;
export const userActions = actions;

export const useUserSlice = () => {
  const actions = {
    ...userSlice.actions,
    updateUserProfile,
  };
  return { actions };
};
