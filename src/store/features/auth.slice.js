import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { signInService, signUpService } from '../../services/apis/auth.service';

export const signIn = createAsyncThunk('auth/signIn', async ({ phone, password }, { rejectWithValue }) => {
  try {
    const response = await signInService({ phone, password });
    return response.data;
  } catch (err) {
    return rejectWithValue(err.response.data);
  }
});

export const signUp = createAsyncThunk('auth/signUp', async ({ phone, password }, { rejectWithValue }) => {
  try {
    const response = await signUpService({ phone, password });
    return response.data;
  } catch (err) {
    return rejectWithValue(err.response.data);
  }
});

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    loading: false,
    error: null,
  },
  reducers: {
    logout: state => {
      state.user = null;
    },
    clearError(state) {
      state.error = null;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(signIn.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(signIn.fulfilled, (state, action) => {
        state.user = action.payload;
        state.loading = false;
      })
      .addCase(signIn.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(signUp.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(signUp.fulfilled, (state, action) => {
        state.user = action.payload;
        state.loading = false;
      })
      .addCase(signUp.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { logout, clearError } = authSlice.actions;
export const selectUser = state => state.auth.user;
export const selectLoading = state => state.auth.loading;
export const selectError = state => state.auth.error;
export default authSlice.reducer;
