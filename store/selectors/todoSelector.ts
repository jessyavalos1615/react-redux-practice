import { RootState } from '../';

export const getAllTodos = (state: RootState) => state.todo.todos;
