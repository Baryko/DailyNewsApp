import { displaySlice } from './displaySlice';

describe('displaySlice', () => {
  const initialState = { display: 'tile' };
  const { setDisplay } = displaySlice.actions;
  const reducer = displaySlice.reducer;

  it('should handle setDisplay', () => {
    const newState = reducer(initialState, setDisplay('list'));
    expect(newState.display).toEqual('list');
  });

  it('should not modify the state when unknown action type is provided', () => {
    const newState = reducer(initialState, { type: 'unknown' });
    expect(newState).toEqual(initialState);
  });
});
