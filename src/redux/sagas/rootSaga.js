import { takeEvery } from 'redux-saga/effects';
import { addTodoRequest } from '../slices';
import { addTodo } from './todosSaga';

export function* rootSaga(){
    yield takeEvery(addTodoRequest.type, addTodo);
}