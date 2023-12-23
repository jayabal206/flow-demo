import { createSlice } from '@reduxjs/toolkit';

const changeLanguage = createSlice({
  name: 'lang',
  initialState: { lang: 'global', dir: 'ltr' },
  reducers: {
    changeLanguage(state, action) {
      state.lang = action.payload;
    },
    changeDirection(state, action) {
      state.dir = action.payload;
    },
  },
});

export const languageActions = changeLanguage.actions;
export default changeLanguage.reducer;
