import React, { createContext, useContext } from 'react';
import { createStore, StudentStore } from './createStore';
import { useLocalStore } from 'mobx-react';

const storeContext = createContext<StudentStore | null>(null);

export const StoreProvider: React.FC = ({ children }) => {
  const store = useLocalStore(createStore);

  return <storeContext.Provider value={store}>{children}</storeContext.Provider>;
};

export const useStore = () => {
  const store = useContext(storeContext);

  if (!store) {
    throw new Error('useStore must be used within a StoreProvider.');
  }

  return store;
};
