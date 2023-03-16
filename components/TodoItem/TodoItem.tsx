import * as React from 'react';

import { CheckBox } from '../CheckBox/CheckBox';
import { TodoTypes } from '../../store/reducers/todoReducer';
import { TodoContainer, TodoDescription, TodoTitle } from '../TodoItem/Style';

interface TodoItemProps {
  todo: TodoTypes;
}

export const TodoItem = (props: TodoItemProps): JSX.Element => {
  const {
    todo: { title, description, complete },
  } = props;

  const [status, setStatus] = React.useState(complete);

  const handleChange = (event) => {
    console.log(event);
    setStatus(event);
  };

  return (
    <TodoContainer>
      <TodoTitle>{title}</TodoTitle>
      <TodoDescription>{description}</TodoDescription>
      <CheckBox value={status} onChange={handleChange} />
    </TodoContainer>
  );
};
