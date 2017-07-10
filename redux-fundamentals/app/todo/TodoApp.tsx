import * as React from 'react';
import { Todo, TodoAction } from './reducers/todoListReducer';
import { FilterAction, TodoFilter } from './reducers/visibilityFilterReducer';
import { FilterLink } from './FilterLink';
import TodoList from './TodoList';
import Footer from './Footer';
import AddTodo from './AddTodo';

interface TodoAppProps {
  dispatch: (action: TodoAction | FilterAction) => void;
  todos: Todo[];
  visibilityFilter: TodoFilter;
}

let id = 1;

class TodoApp extends React.PureComponent<TodoAppProps, object> {
  constructor(props: TodoAppProps) {
    super(props);
    this.addTodo = this.addTodo.bind(this);
    this.toggleTodo = this.toggleTodo.bind(this);
    this.setVisibilityFilter = this.setVisibilityFilter.bind(this);
  }
  toggleTodo(todoId: number) {
    this.props.dispatch({
      type: 'TOGGLE_TODO',
      id: todoId,
    });
  }
  addTodo(text: string) {
    this.props.dispatch({
      type: 'ADD_TODO',
      text,
      id,
    });
    id += 1;
  }
  setVisibilityFilter(filter: TodoFilter) {
    this.props.dispatch({
      type: 'SET_VISIBILITY_FILTER',
      filter,
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
    return (
      <div>
        <AddTodo onAddClick={this.addTodo} />
        <TodoList todos={this.filterTodos()} onTodoClick={this.toggleTodo}/>
        <Footer onFilterClick={this.setVisibilityFilter} visibilityFilter={this.props.visibilityFilter} />
      </div>
    );
  }
}

export default TodoApp;
