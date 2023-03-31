import { configureStore } from '@reduxjs/toolkit';
import displayReducer from '../slices/displaySlice';
import sideBarReducer from '../slices/sideBarSlice';

export const store = configureStore({
  reducer: { display: displayReducer, barVisibility: sideBarReducer },
});
