import { Provider } from 'react-redux';
import { NewsModalProvider } from '../../../Hooks/useNewsModal/useNewsModal';
import NewsSection from './NewsSection';
import { render as rtlRender, screen, waitFor } from '@testing-library/react';
import { store } from '../../../Redux/store/store';
import { ReactNode } from 'react';

const render = (component: ReactNode) =>
  rtlRender(
    <>
      <Provider store={store}>
        <NewsModalProvider>{component}</NewsModalProvider>
      </Provider>
    </>
  );

describe('header', () => {
  it('renders the component properly', async () => {
    render(<NewsSection />);
    const heading = screen.getByText(/THE LATEST/i);
    expect(heading).toBeVisible();
  });
});
