import { createSlice } from '@reduxjs/toolkit';

const initialState = { todos: [], loading: false };

export const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodoRequest: (state) => { state.loading = true; },
    addTodoSuccess: (state, action) => {
      state.todos.push(action.payload);
      state.loading = false;
    },
    deleteTodoRequest: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
  },
});

export const {  addTodoRequest, addTodoSuccess, deleteTodoRequest } = todosSlice.actions;
