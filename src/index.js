import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducers';
import Routes from './router';



const App = () => {
  const store = createStore(reducers, {});

  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
};
if(typeof window !== 'undefined') {
  ReactDOM.render(<App />, document.getElementById('root'));
}
