import * as React from 'react';
import { Todo, TodoAction } from './reducers/todoListReducer';
import { FilterAction, TodoFilter } from './reducers/visibilityFilterReducer';
import { FilterLink } from './FilterLink';
import TodoList from './TodoList';
import {AddTodo} from './AddTodo';

interface TodoAppProps {
  dispatch: (action: TodoAction | FilterAction) => void;
  todos: Todo[];
  visibilityFilter: TodoFilter;
}

interface TodoAppState {
  inputValue: string;
}

let id = 1;

class TodoApp extends React.PureComponent<TodoAppProps, TodoAppState> {
  constructor(props: TodoAppProps) {
    super(props);
    this.addTodo = this.addTodo.bind(this);
    this.toggleTodo = this.toggleTodo.bind(this);
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
        <p>
          Show:
          <FilterLink
            filter={'SHOW_ALL'}
            dispatch={this.props.dispatch}
            active={this.props.visibilityFilter === 'SHOW_ALL'}
          >
            All
          </FilterLink>
          <FilterLink
            filter={'SHOW_COMPLETED'}
            dispatch={this.props.dispatch}
            active={this.props.visibilityFilter === 'SHOW_COMPLETED'}
          >
            Completed
          </FilterLink>
          <FilterLink
            filter={'SHOW_ACTIVE'}
            dispatch={this.props.dispatch}
            active={this.props.visibilityFilter === 'SHOW_ACTIVE'}
          >
            Active
          </FilterLink>
        </p>
      </div>
    );
  }
}

export default TodoApp;
