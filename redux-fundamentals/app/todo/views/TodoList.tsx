import * as React from 'react';
import Todo from './Todo.tsx';

export interface TodoListProps {
  todos: any[],
  onTodoClick: (any) => void
}
class TodoList extends React.Component<TodoListProps,{}> {
  renderTodoList() {
    const {todos} = this.props;

    return todos.map(todo => <Todo key={todo.id} 
                                   onClick={() => this.props.onTodoClick(todo.id)}
                             {...todo} /> )
  }
  render() {
    return (
      <ul>
          {this.renderTodoList()}
      </ul>
    );
  }
}

export default TodoList;