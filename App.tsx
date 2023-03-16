import * as React from 'react';
import { useSelector } from 'react-redux';
import { TodoItem } from './components/TodoItem/TodoItem';
import { todoSelector } from './store/selectors';
import './style.css';

export const App = (): JSX.Element => {
  const todos = useSelector(todoSelector.getAllTodos);
  return (
    <div>
      <h1>Todo App</h1>
      {todos.map((todo, i) => (
        <TodoItem key={i} todo={todo} />
      ))}
    </div>
  );
};
