import * as React from 'react';

import { TodoContainer, TodoDescription, TodoTitle } from '../TodoItem/Style';
import { TodoTypes } from '../../store/reducers/todoReducer';

interface TodoItemProps {
  todo: TodoTypes;
}

export const TodoItem = (props: TodoItemProps): JSX.Element => {
  const {
    todo: { title, description, complete },
  } = props;
  return (
    <TodoContainer>
      <TodoTitle>{title}</TodoTitle>
      <TodoDescription>{description}</TodoDescription>
    </TodoContainer>
  );
};
