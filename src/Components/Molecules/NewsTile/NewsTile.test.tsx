import { vi } from 'vitest';
import NewsTile from './NewsTile';
import { screen, render } from '@testing-library/react';
import user from '@testing-library/user-event';

describe('NewsList', () => {
  it('Renders the component', async () => {
    const onClick = vi.fn();
    const setArticle = vi.fn();

    render(
      <NewsTile
        url="http://example.pl"
        title="example"
        description="example description"
        date="2023-05-08"
        source="http://example.pl"
        handleOnClick={onClick}
        handleSetArticle={setArticle}
      />
    );

    const button = screen.getByText(/Read more/i);

    expect(button).toBeVisible();

    await user.click(button);

    expect(onClick).toHaveBeenCalled();
    expect(setArticle).toHaveBeenCalled();
  });
});
