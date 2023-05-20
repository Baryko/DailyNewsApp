import { createSlice } from '@reduxjs/toolkit';

export const displaySlice = createSlice({
  name: 'display',
  initialState: { display: 'tile' },
  reducers: {
    setDisplay(state, { payload }) {
      return {
        ...state,
        display: payload,
      };
    },
  },
});

export const { setDisplay } = displaySlice.actions;

export default displaySlice.reducer;
