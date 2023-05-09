import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import jwt_decode from 'jwt-decode';

interface AuthState {
  token: string | null;
  isAuthenticated: boolean;
  user: any;
}

const initialState: AuthState = {
  token: localStorage.getItem('token'),
  isAuthenticated: false,
  user: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginSuccess: (state, action: PayloadAction<string>) => {
      localStorage.setItem('token', action.payload);
      state.token = action.payload;
      state.isAuthenticated = true;
      state.user = jwt_decode(action.payload);
    },
    logoutSuccess: (state) => {
      localStorage.removeItem('token');
      state.token = null;
      state.isAuthenticated = false;
      state.user = null;
    },
  },
});

export const { loginSuccess, logoutSuccess } = authSlice.actions;

export default authSlice.reducer;

export const selectCurrentUser = (state: any) => state.auth.user
export const selectCurrentToken = (state: any) => state.auth.token
export const isAuthenticated = (state: any) => state.auth.isAuthenticated

export type Action = 
| ReturnType<typeof loginSuccess>
| ReturnType<typeof logoutSuccess>