import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { updateUserByIdService } from '../../services/apis/user.service';

export const updateUserProfile = createAsyncThunk(
  'user/updateUserProfile',
  async ({ email, fullname, phone }, { rejectWithValue, getState }) => {
    try {
      const { auth } = getState();
      const { user } = auth;
      const { id } = user;
      const response = await updateUserByIdService({ id, email, fullname, phone });
      return response.data;
    } catch (error) {
      console.warn('🚀 ~ file: user.slice. updateUserProfile ~ error:', error);
      return rejectWithValue(error);
    }
  },
);

const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: null,
    loading: false,
    error: null,
  },
  reducers: {
    clearError(state) {
      state.error = null;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(updateUserProfile.pending, state => {
        state.user = undefined;
        state.loading = true;
        state.error = null;
      })
      .addCase(updateUserProfile.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.loading = false;
      })
      .addCase(updateUserProfile.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { clearError } = userSlice.actions;
export default userSlice.reducer;
