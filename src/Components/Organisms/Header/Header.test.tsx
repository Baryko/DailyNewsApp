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

  it('displays correct icon', async () => {
    render(<Header />);

    const switcher = screen.getByTestId('switcher');

    expect(switcher).toBeVisible();

    const tileIcon = screen.getByAltText('tile');

    expect(tileIcon).toBeVisible();
  });

  it('switches the icon', async () => {
    render(<Header />);

    const switcher = screen.getByTestId('switcher');

    expect(switcher).toBeVisible();

    await user.click(switcher);

    const listIcon = screen.getByAltText('list');

    expect(listIcon).toBeVisible();

    expect(screen.queryByAltText('tile')).not.toBeInTheDocument();
  });
});
