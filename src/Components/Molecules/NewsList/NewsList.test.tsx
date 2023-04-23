import { vi } from 'vitest';
import NewsList from './NewsList';

import user from '@testing-library/user-event';
import { getByText, render as rtlRender, screen, waitFor } from '@testing-library/react';

describe('NewsList', () => {
  it('Renders the component', async () => {
    const title = 'title';
    const data = 'data';
    const source = 'source';
    const onClickFn = vi.fn();
    const setArticleFn = vi.fn();

    rtlRender(
      <NewsList title={title} data={data} source={source} handleOnClick={onClickFn} handleSetArticle={setArticleFn} />
    );

    const titleInComponent = screen.getByText(/title/i);
    expect(titleInComponent).toBeVisible();

    const wrapper = screen.getByTestId('wrapper');

    await user.click(wrapper);

    expect(onClickFn).toHaveBeenCalled();
    expect(setArticleFn).toHaveBeenCalled();
  });
});
