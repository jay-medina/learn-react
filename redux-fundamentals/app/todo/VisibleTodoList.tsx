import * as React from 'react';
import TodoList from './TodoList';
import { Todo, TodoAction } from './reducers/todoListReducer';
import { TodoFilter } from './reducers/visibilityFilterReducer';

export interface VisibleTodoListProps {
  dispatch: (action: TodoAction) => void;
  todos: Todo[];
  visibilityFilter: TodoFilter;
}

export default class extends React.PureComponent<VisibleTodoListProps, any> {
  toggleTodo(todoId: number) {
    this.props.dispatch({
      type: 'TOGGLE_TODO',
      id: todoId,
    });
  }
  filterTodos() {
    const { todos, visibilityFilter } = this.props;

    return todos.filter((todo) => {
      return (visibilityFilter === 'SHOW_COMPLETED' && todo.completed) ||
        (visibilityFilter === 'SHOW_ACTIVE' && !todo.completed) ||
        (visibilityFilter === 'SHOW_ALL');
    });
  }
  render() {
    return <TodoList todos={this.filterTodos()} onTodoClick={this.toggleTodo} />;
  }
}
