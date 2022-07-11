import { render } from '@testing-library/react';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';

import userSlice from '../store/userSlice';

export const preloadedState = {
  user: {
    name: 'upworkTest',
    password: '2022',
  },
  isLogged: false,
};

export function renderWithRedux(
  ui,
  {
    preloadedState = {},
    store = configureStore({ reducer: { user: userSlice }, preloadedState }),
    ...renderOptions
  } = {}
) {
  function Wrapper({ children }) {
    return <Provider store={store}>{children}</Provider>;
  }

  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
}
