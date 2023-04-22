import React, { PropsWithChildren, ReactNode } from 'react';
import { fireEvent, getByText, render as rtlRender, screen, waitFor } from '@testing-library/react';
import Burger from './Burger';
import { vi, vitest } from 'vitest';
import { Provider, useSelector } from 'react-redux';
import { store } from '../../../Redux/store/store';
import { State } from '../../Organisms/SideMenu/SideBar.types';
import user from '@testing-library/user-event';

const render = (component: ReactNode) => rtlRender(<Provider store={store}>{component}</Provider>);

describe('Burger', () => {
  it('Renders the component', async () => {
    const onClickFn = vi.fn();
    render(<Burger handleOpenSideBar={onClickFn} />);
    const burger = screen.getByTestId('burger');

    expect(burger).toBeVisible();

    await user.click(burger);

    expect(onClickFn).toHaveBeenCalled();
  });
});
