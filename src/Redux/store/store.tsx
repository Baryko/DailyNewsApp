import { configureStore } from '@reduxjs/toolkit';
import displayReducer from '../slices/displaySlice/displaySlice';
import sideBarReducer from '../slices/sideBarSlice/sideBarSlice';

export const store = configureStore({
  reducer: { display: displayReducer, barVisibility: sideBarReducer },
});
