import { createSlice } from '@reduxjs/toolkit';

const tabSelection = createSlice({
  name: 'tabs',
  initialState: { obj: {} },
  reducers: {
    tabSelectionClick(state, action) {
      state.obj = action.payload;
    },
  },
});

export const tabSelectionActions = tabSelection.actions;
export default tabSelection.reducer;
