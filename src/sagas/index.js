import { all, call, put, takeEvery } from 'redux-saga/effects';
import { LOAD_TODO_LIST, RENDER_TODO_LIST } from '../actions';

/*
Here you can see that you are creating two sagas:
 */

// fetchToDoList is a saga that issues a request to a backend API (a static JSON file in this case) to fetch a toDoList.
export function* fetchToDoList() {
  const endpoint =
    'https://gist.githubusercontent.com/brunokrebs/f1cacbacd53be83940e1e85860b6c65b/raw/to-do-items.json';
  const response = yield call(fetch, endpoint);
  const data = yield response.json();

  /*
    When the fetchToDoList saga finishes loading the data from the API, it dispatches (through the put function) a
    RENDER_TODO_LIST action with the new list of to-do items.
     */
  yield put({ type: RENDER_TODO_LIST, toDoList: data });
}

// loadToDoList is a saga that listens to LOAD_TODO_LIST actions to trigger the fetchToDoList saga.
export function* loadToDoList() {
  yield takeEvery(LOAD_TODO_LIST, fetchToDoList);
}

export default function* rootSaga() {
  yield all([loadToDoList()]);
}
