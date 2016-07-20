import * as React from 'react';
import TodoItem from './TodoItem.tsx';
import {Todo} from '../reducers/todosReducer.ts';

export interface TodoListProps {
  toggleTodo: (id) => void,
  todos: Todo[],
  filter: string
} 

class TodoListView extends React.Component<TodoListProps, {}> {
  getFilteredTodos() {
    const {todos, filter} = this.props;

    switch(filter) {
      case 'SHOW_ALL': return todos;
      case 'SHOW_COMPLETED': return todos.filter(todo => todo.completed);
      case 'SHOW_ACTIVE': return todos.filter(todo => !todo.completed);
    }
  }
  renderTodos() {
    return this.getFilteredTodos().map(todo => {
      return <TodoItem key={todo.id} 
                           id={todo.id} 
                           onClick={this.props.toggleTodo.bind(this)}
                           completed={todo.completed}>
                {todo.text}
             </TodoItem>
    })
  }
  render() {
    return (
      <ul className="todos">
          {this.renderTodos()}
      </ul>
    );
  }
}

export default TodoListView;