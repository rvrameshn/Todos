import { put, takeEvery } from 'redux-saga/effects';
import { addTodoSuccess, addTodoRequest } from '../slices';

export function* addTodo(action) {
  // Simulating an API post
  yield put(addTodoSuccess({ id: Date.now(), title: action.payload, completed: false }));
}

export function* todosSaga() {
  yield takeEvery(addTodoRequest.type, addTodo);
}