import { rest, setupWorker } from 'msw';

import menu from './menu';

const transformObject = (obj) => {
  const result: any = [];
  Object.entries(obj).forEach(([key, value]) => {
    const [method, url] = key.split(' ');
    result.push(
      rest[method.toLocaleLowerCase()](url, (req, res, ctx) => {
        return res(ctx.status(200), ctx.json(value));
      }),
    );
  });
  return result;
};

const transform = (params) => {
  let result = [];
  Object.values(params).forEach((item) => {
    result = result.concat(Array.isArray(item) ? item : transformObject(item));
  });
  return result;
};

export const mockServiceWorker = setupWorker(...transform({ menu }));
