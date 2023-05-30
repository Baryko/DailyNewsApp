import React, { PropsWithChildren, ReactNode } from 'react';
import { render as rtlRender, screen } from '@testing-library/react';

import { Provider, useSelector } from 'react-redux';

import user from '@testing-library/user-event';
import { store } from './Redux/store/store';
import { BrowserRouter } from 'react-router-dom';
import { NewsModalProvider } from './Hooks/useNewsModal/useNewsModal';
import App from './App';

const render = (component: ReactNode) =>
  rtlRender(
    <Provider store={store}>
      <BrowserRouter>
        <NewsModalProvider>{component}</NewsModalProvider>
      </BrowserRouter>
    </Provider>
  );

describe('App', () => {
  it('Renders the component', async () => {
    render(<App />);
    const heading = screen.getByText(/THE LATEST/i);
    expect(heading).toBeVisible();
  });
  it('Side-bar should be hidden on startup', async () => {
    render(<App />);
    const burger = screen.getByTestId('burger');
    expect(burger).toBeVisible();
    const sideBar = screen.getByTestId('sideBar');

    const computedStyle = window.getComputedStyle(sideBar);
    const translateX = computedStyle.transform;
    expect(translateX).toBe('translateX(-100%)');
  });
  it('Burger opens the side-bar', async () => {
    render(<App />);
    const burger = screen.getByTestId('burger');
    expect(burger).toBeVisible();
    const sideBar = screen.getByTestId('sideBar');

    await user.click(burger);

    const computedStyle = window.getComputedStyle(sideBar);
    const translateX = computedStyle.transform;
    expect(translateX).toBe('translateX(0%)');
  });

  it('Button closes the side-bar', async () => {
    render(<App />);
    const burger = screen.getByTestId('burger');
    expect(burger).toBeVisible();
    const sideBar = screen.getByTestId('sideBar');

    const computedStyle = window.getComputedStyle(sideBar);
    const translateX = computedStyle.transform;
    expect(translateX).toBe('translateX(0%)');

    const sideBarCloseButton = screen.getByTestId('sideBarCloseButton');
    await user.click(sideBarCloseButton);

    const computedStyleInvisible = window.getComputedStyle(sideBar);
    const translateXInvisible = computedStyleInvisible.transform;
    expect(translateXInvisible).toBe('translateX(-100%)');
  });

  it('Renders the site with a tile-setup. ', async () => {
    render(<App />);

    const article = await screen.findByText('Article 1');
    expect(article).toBeVisible();

    const button = await screen.findAllByText('Read more');
  });

  it('Opens modal', async () => {
    render(<App />);

    const button = await screen.findAllByText('Read more');

    await user.click(button[0]);

    const modalCloseButton = await screen.findByTestId('modalCloseButton');

    expect(modalCloseButton).toBeVisible();
  });

  it('Closes modal', async () => {
    render(<App />);

    const modalCloseButton = screen.queryByTestId('modalCloseButton');

    if (modalCloseButton) {
      await user.click(modalCloseButton);
    }

    expect(screen.queryByTestId('modalCloseButton')).not.toBeInTheDocument();
  });

  it('Switches the view to list ', async () => {
    render(<App />);

    const switcher = screen.getByTestId('switcher');

    expect(switcher).toBeVisible();

    await user.click(switcher);

    const button = await screen.queryByText('Read more');

    expect(button).not.toBeInTheDocument();
  });
});
