import { render as rtlRender, screen } from '@testing-library/react';
import Header from './Header';
import { Provider } from 'react-redux';
import { store } from '../../../Redux/store/store';
import { ReactNode } from 'react';
import user from '@testing-library/user-event';
import { Button } from '../../Molecules/NewsTile/NewsTile.styles';
import SideBar from '../SideMenu/SideBar';
import { BrowserRouter } from 'react-router-dom';

const render = (component: ReactNode) => rtlRender(<Provider store={store}>{component}</Provider>);

describe('header', () => {
  it('renders the component', async () => {
    render(<Header />);

    const button = screen.getByTestId('sideBarButton');

    expect(button).toBeInTheDocument();
  });
});
