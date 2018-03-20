import React from 'react';
import createStore from './redux/store';
import { Provider } from 'react-redux';
import Routes from './router';

import {
  createBrowserHistory,
  createMemoryHistory
} from 'history';

import reducers from './reducers';

export default function AppRoot() {

  const getInitialState = (history) => ({
    router: {
      location: {
        pathname: history.location.pathname,
        state: history.location.state || {}
      }
    }
  });


  history = !this.props.test ?
    createBrowserHistory() :
    createMemoryHistory();

  store = createStore({
    socket: this.socket,
    history: this.history
  });

  return (
    <Provider store={createStore(reducers)}>
      <Routes />
    </Provider>
  );
}

