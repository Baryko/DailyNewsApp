import { ReactNode } from 'react';
import { render as rtlRender, screen, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../../Redux/store/store';

import SideBar from './SideBar';
import { BrowserRouter } from 'react-router-dom';

const render = (component: ReactNode) =>
  rtlRender(
    <Provider store={store}>
      <BrowserRouter>{component}</BrowserRouter>
    </Provider>
  );

describe('SideBar', () => {
  it('Renders the component', () => {
    render(<SideBar />);
    const country = screen.getByText(/POLSKA/i);

    expect(country).toBeVisible();
  });
});
