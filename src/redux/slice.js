import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const todoInitialState = [];

const todosSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: todoInitialState,
    filter: '',
  },

  reducers: {
    addTodo(state, { payload }) {
      state.items.push(payload);
    },

    deleteTodo(state, { payload }) {
      state.items = state.items.filter(item => item.id !== payload);
    },

    changeFilter(state, { payload }) {
      state.filter = payload;
    },
  },
});

const persistConfig = {
  key: 'todos',
  storage,
  whitelist: ['todos'],
};

export const persisteTodoReducer = persistReducer(
  persistConfig,
  todosSlice.reducer
);

export const { addTodo, deleteTodo, changeFilter } = todosSlice.actions;

export const getTodos = state => state.todos.items;
export const getFilter = state => state.todos.filter;
