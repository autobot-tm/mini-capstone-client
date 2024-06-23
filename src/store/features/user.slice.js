import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getUserByIdService, updateUserByIdService } from '../../services/apis/user.service';

const createInitialState = () => {
  const initialState = {
    loading: false,
    error: null,
    success: false,
  };
  return initialState;
};
export const initialState = createInitialState();

export const getUserProfile = createAsyncThunk('user/getUserProfile', async (_, { rejectWithValue, getState }) => {
  try {
    const { auth } = getState();
    const { user } = auth;
    const id = user?.id;
    const response = await getUserByIdService({ id });
    return {
      ...response,
    };
  } catch (error) {
    console.warn('🚀 ~ file: user.slice. getUserProfile ~ error:', error);
    return rejectWithValue(error);
  }
});

export const updateUserProfile = createAsyncThunk(
  'user/updateUserProfile',
  async ({ fullname, phone }, { rejectWithValue }) => {
    try {
      const response = await updateUserByIdService({ fullname, phone });
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
    builder.addCase(getUserProfile.pending, state => ({
      ...state,
      user: '',
      success: false,
      loading: true,
    }));
    builder.addCase(getUserProfile.fulfilled, (state, { payload }) => ({
      ...state,
      user: payload,
      loading: false,
      success: true,
    }));
    builder.addCase(getUserProfile.rejected, (state, { payload }) => ({
      ...state,
      loading: false,
      success: false,
      error: payload,
    }));
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
    getUserProfile,
    updateUserProfile,
  };
  return { actions };
};
