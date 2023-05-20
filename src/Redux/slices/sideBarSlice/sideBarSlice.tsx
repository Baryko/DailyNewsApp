import { createSlice } from '@reduxjs/toolkit';

export const sideBarSlice = createSlice({
  name: 'barVisibility',
  initialState: { isVisible: false },
  reducers: {
    setIsVisible(state, { payload }) {
      return {
        ...state,
        isVisible: payload,
      };
    },
  },
});

export const { setIsVisible } = sideBarSlice.actions;
export default sideBarSlice.reducer;
