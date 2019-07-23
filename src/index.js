import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import toDoApp from './reducers';
import App from './App';

/*
Using the createStore function to create a single source of truth object about the state of the app (i.e., the store
constant). Then, uses this store to feed the app with state.
 */
const store = createStore(toDoApp);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
