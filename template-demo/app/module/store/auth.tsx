import { createSlice } from '@reduxjs/toolkit';

// login authentication
const initialAuthState = { isAuthenticated: false };

const authSlice = createSlice({
  name: 'authenticated',
  initialState: initialAuthState,
  reducers: {
    login(state) {
      state.isAuthenticated = true;
    },
    logout(state) {
      state.isAuthenticated = false;
    },
  },
});

export const authActions = authSlice.actions;

export default authSlice.reducer;
