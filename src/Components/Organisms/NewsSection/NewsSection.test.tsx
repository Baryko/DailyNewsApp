import { Provider } from 'react-redux';
import { NewsModalProvider, useNewsModal } from '../../../Hooks/useNewsModal/useNewsModal';
import NewsSection from './NewsSection';
import { findByText, render as rtlRender, screen, waitFor } from '@testing-library/react';
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

it('renders the component properly', async () => {
  render(<NewsSection />);
  const heading = screen.getByText(/THE LATEST/i);
  expect(heading).toBeVisible();
});

it('shows article on render', async () => {
  render(<NewsSection />);
  const article = await screen.findByText('Article 1');
  expect(article).toBeVisible();
});
