import { vi } from 'vitest';
import NewsModal from './NewsModal';
import { screen, render } from '@testing-library/react';
import user from '@testing-library/user-event';

describe('NewsList', () => {
  it('Renders the component', async () => {
    const onClick = vi.fn();

    render(<NewsModal handleOnClick={onClick} content="example" author="johny" url="http://example" />);

    const closeIconImage = screen.getByAltText(/closeIcon/i);
    const author = screen.getByText(/author/i);

    expect(author).toBeVisible();

    await user.click(closeIconImage);

    expect(onClick).toHaveBeenCalled();
  });
});
