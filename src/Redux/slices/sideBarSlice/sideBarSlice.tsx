import { createSlice } from '@reduxjs/toolkit';

const sideBarSlice = createSlice({
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
