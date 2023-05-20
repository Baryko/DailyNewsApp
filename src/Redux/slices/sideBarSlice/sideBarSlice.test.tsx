import { sideBarSlice } from './sideBarSlice';

describe('sideBarSlice', () => {
  const initialState = { isVisible: false };
  const { setIsVisible } = sideBarSlice.actions;
  const reducer = sideBarSlice.reducer;

  it('should handle setDisplay', () => {
    const newState = reducer(initialState, setIsVisible(true));
    expect(newState.isVisible).toBeTruthy;
  });

  it('should not modify the state when unknown action type is provided', () => {
    const newState = reducer(initialState, { type: 'unknown' });
    expect(newState).toEqual(initialState);
  });
});
