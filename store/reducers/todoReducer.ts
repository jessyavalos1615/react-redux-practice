import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface TodoTypes {
  title: string;
  description: string;
  complete: boolean;
}

export interface TodoState {
  todos: TodoTypes[];
}

const initialState: TodoState = {
  todos: [],
};

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<TodoTypes>) => {
      state.todos = [...state.todos, action.payload];
    },
  },
});

export const { add } = todoSlice.actions;

export default todoSlice.reducer;
