import { configureStore } from '@reduxjs/toolkit';
import authReducer from './auth';
import langReducer from './lang_slice';
import sideMenu from './menu_slice';
import themeChange from './theme_slide';
import tabSelection from './tab_selection_slice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    lang: langReducer,
    menu: sideMenu,
    theme: themeChange,
    tabs: tabSelection,
  },
});

export default store;
