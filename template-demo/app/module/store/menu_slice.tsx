import { createSlice } from '@reduxjs/toolkit';

const sideMenu = createSlice({
  name: 'menu',
  initialState: { active: '', data: {} },
  reducers: {
    sideMenuClick(state, action) {
      state.data = action.payload;
    },
  },
});

export const sideMenuActions = sideMenu.actions;
export default sideMenu.reducer;
