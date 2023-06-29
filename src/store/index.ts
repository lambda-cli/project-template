import { useContext, createContext } from 'react';

import basic from './Basic';

class RootStore {
  basic = basic;
}

const store = new RootStore();

const Context = createContext(store);

export const useStore = () => {
  return useContext(Context);
};
