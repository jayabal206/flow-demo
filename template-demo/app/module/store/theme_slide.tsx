import { createSlice } from '@reduxjs/toolkit';

const themeChange = createSlice({
  name: 'theme',
  initialState: { mode: 'light' },
  reducers: {
    themeChangeClick(state, action) {
      state.mode = action.payload;
    },
  },
});

export const themeChangeActions = themeChange.actions;
export default themeChange.reducer;
