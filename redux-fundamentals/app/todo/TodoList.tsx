import * as React from 'react';
import { Todo as TodoItem } from './reducers/todoListReducer';
import Todo from './Todo';

export interface TodoListProps {
  todos: TodoItem[];
  onTodoClick: (id: number) => void;
}

const TodoList: React.StatelessComponent<TodoListProps> = ({ todos, onTodoClick }) => {
  function onClick(todoId: number) {
    return () => onTodoClick(todoId);
  }
  return (
    <ul>
      {
        todos.map((todo) => {
          return <Todo key={todo.id} {...todo} onClick={onClick(todo.id)} />;
        })
      }
    </ul>
  );
};

export default TodoList;
