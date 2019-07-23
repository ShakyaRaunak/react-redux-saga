import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';

import App from './App';
import { loadToDoList } from './actions';
import toDoApp from './reducers';
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();

/*
Using the createStore function to create a single source of truth object about the state of the app (i.e., the store
constant). Then, uses this store to feed the app with state.
 */
const store = createStore(toDoApp, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

// Make your app dispatch a LOAD_TODO_LIST action right after loading on users' browsers.
store.dispatch(loadToDoList());

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
