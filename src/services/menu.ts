import { AxiosResponse } from 'axios';

import request from './index';

interface IMenu {
  name: string;
  value: string;
}

export const queryMenu = async () => {
  try {
    const res: AxiosResponse<{ content: IMenu[] }> = await request({
      url: '/api/menu',
      method: 'GET',
    });
    return res.data.content;
  } catch (error) {
    console.warn(error);
  }
};
