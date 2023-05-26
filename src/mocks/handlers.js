import { rest } from 'msw'
import { articles } from './data/articles'

export const handlers = [
  rest.get('https://newsapi.org/v2/top-headlines', (req, res, ctx) => {
    const queryParams = req.url.searchParams;
    const country = queryParams.get('country');
    const apiKey = queryParams.get('apiKey');
    const pageSize = queryParams.get('pageSize');
    const sortBy = queryParams.get('sortBy');
    const category = queryParams.get('category');

    // Poniżej możesz dostosować odpowiedź serwera w zależności od wartości parametrów

    return res(
      ctx.status(200),
      ctx.json({ articles })
    );
  })
];