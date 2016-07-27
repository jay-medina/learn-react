import * as React from 'react';
import ActionTypes from '../reducers/ActionTypes.ts';
import FilterLink from './FilterLink.tsx';
import TodoList from './TodoList.tsx';

let id = 0;

export interface TodoAppProps {
  todos: any[],
  visibilityFilter: string,
  dispatch: (any) => void
}

export interface TodoAppState {
  inputValue: string
}

class TodoApp extends React.Component<TodoAppProps,TodoAppState> {
  constructor() {
    super();

    this.state = {
      inputValue: ''
    }
  }
  updateInputValue(e) {
    e.preventDefault();
    this.setState({inputValue: e.target.value});
  }
  addTodo() {
    this.props.dispatch({
            type: ActionTypes.ADD_TODO,
            text: this.state.inputValue,
            id: id++
          });
    this.setState({inputValue: ''});
  }
  toggleTodo(id) {
    this.props.dispatch({
      id,
      type: ActionTypes.TOGGLE_TODO
    })
  }
  getVisibleTodos(todos, filter) {
    switch(filter) {
      case 'SHOW_ALL': return todos;
      case 'SHOW_ACTIVE': return todos.filter(t => !t.completed);
      case 'SHOW_COMPLETED': return todos.filter(t => t.completed);
    }

    return todos;
  }
  renderFilterLinks(currentFilter) {
    return (
      <p>
        Show:
        <FilterLink currentFilter={currentFilter} filter='SHOW_ALL' dispatch={this.props.dispatch}>All</FilterLink>
        <FilterLink currentFilter={currentFilter} filter='SHOW_ACTIVE' dispatch={this.props.dispatch}>Active</FilterLink>
        <FilterLink currentFilter={currentFilter} filter='SHOW_COMPLETED' dispatch={this.props.dispatch}>Completed</FilterLink>
      </p>
    )
  }
  render() {
    const {todos, visibilityFilter} = this.props;
    const visibleTodos = this.getVisibleTodos(todos, visibilityFilter);

    return (
      <div>
        <input value={this.state.inputValue} onChange={this.updateInputValue.bind(this)} />
        <button onClick={this.addTodo.bind(this)}>Add Todo</button>
        <TodoList todos={visibleTodos} onTodoClick={this.toggleTodo.bind(this)} />
        
        {this.renderFilterLinks(visibilityFilter)}
      </div>
    )
  }
}

export default TodoApp;