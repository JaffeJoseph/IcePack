import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import Routes from './router';

import reducers from './reducers';

export default function AppRoot() {
  return (
    <Provider store={createStore(reducers)}>
      <Routes />
    </Provider>
  );
}

