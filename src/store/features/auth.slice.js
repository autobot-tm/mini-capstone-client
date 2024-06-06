import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {
  changePasswordService,
  requestResetPasswordService,
  signInService,
  signInWithGoogleService,
  signUpService,
} from '../../services/apis/auth.service';
import { remove, save } from '../../utils/local-storage';
import { STORAGE_KEYS } from '../../constants/storage.constant';
import { googleLogout } from '@react-oauth/google';

export const signIn = createAsyncThunk('auth/signIn', async (input, { rejectWithValue }) => {
  try {
    const response = await signInService(input);
    await save(STORAGE_KEYS.AUTH, response.data.token);
    return response.data;
  } catch (err) {
    console.warn('🚀 ~ file: auth.slice. signIn ~ error:', err);
    return rejectWithValue(err.response.data);
  }
});

export const signUp = createAsyncThunk('auth/signUp', async (input, { rejectWithValue }) => {
  try {
    const response = await signUpService(input);
    return response.data;
  } catch (err) {
    console.warn('🚀 ~ file: auth.slice. signUp ~ error:', err);
    return rejectWithValue(err.response.data);
  }
});

export const changePassword = createAsyncThunk('auth/changePassword', async (input, { rejectWithValue }) => {
  try {
    const response = await changePasswordService(input);
    return response.data;
  } catch (err) {
    console.warn('🚀 ~ file: auth.slice. changePassword ~ error:', err);
    return rejectWithValue(err.response.data);
  }
});

export const signInWithGoogle = createAsyncThunk('auth/signInWithGoogle', async ({ token }, { rejectWithValue }) => {
  try {
    console.log('🚀 ~ idToken:', token);
    const response = await signInWithGoogleService({ token: token ?? '' });
    await save(STORAGE_KEYS.AUTH, response.data.token);
    return response.data;
  } catch (err) {
    console.warn('🚀 ~ file: auth.slice. signInWithGoogle ~ error:', err);
    return rejectWithValue({
      message: err.message,
      code: err.code,
      response: err.response ? err.response.data : null,
    });
  }
});

export const requestResetPassword = createAsyncThunk(
  'auth/requestResetPassword',
  async (input, { rejectWithValue }) => {
    try {
      await requestResetPasswordService(input);
    } catch (err) {
      console.warn('🚀 ~ file: auth.slice. requestResetPassword ~ error:', err);
      return rejectWithValue({
        message: err.message,
        code: err.code,
        response: err.response ? err.response.data : null,
      });
    }
  },
);

export const signOut = createAsyncThunk('auth/signOut', async (_, { rejectWithValue }) => {
  try {
    googleLogout();
    remove(STORAGE_KEYS.AUTH);
  } catch (err) {
    console.warn('🚀 ~ file: auth.slice. signOut ~ error:', err);
    return rejectWithValue({
      message: err.message,
      code: err.code,
      response: err.response ? err.response.data : null,
    });
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
      })
      .addCase(changePassword.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(changePassword.fulfilled, state => {
        state.loading = false;
      })
      .addCase(changePassword.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(signOut.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(signOut.fulfilled, state => {
        state.user = null;
        state.loading = false;
      })
      .addCase(signOut.rejected, (state, action) => {
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
