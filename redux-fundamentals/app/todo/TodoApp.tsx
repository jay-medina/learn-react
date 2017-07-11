import * as React from 'react';
import { Todo, TodoAction } from './reducers/todoListReducer';
import { FilterAction, TodoFilter } from './reducers/visibilityFilterReducer';
import VisibleTodoList from './VisibleTodoList';
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
    this.setVisibilityFilter = this.setVisibilityFilter.bind(this);
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
  render() {
    return (
      <div>
        <AddTodo onAddClick={this.addTodo} />
        <VisibleTodoList {...this.props} />
        <Footer onFilterClick={this.setVisibilityFilter} visibilityFilter={this.props.visibilityFilter} />
      </div>
    );
  }
}

export default TodoApp;
