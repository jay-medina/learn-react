import * as React from 'react';

export interface TodoProps {
  completed?: boolean;
  text: string;
  onClick: () => void;
}

const Todo: React.StatelessComponent<TodoProps> = ({ completed = false, onClick, text }) => {
  const className = (completed) ? 'completed' : '';

  return (
    <li className={className} onClick={onClick}>
      {text}
    </li>
  );
};

export default Todo;
