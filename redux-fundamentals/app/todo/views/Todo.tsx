import * as React from 'react';
import {Todo, ActionTypes} from '../reducers/todosReducer.ts';
import TodoItemView from './TodoItem.tsx';
import FilterLink from './FilterLink.tsx';

export interface TodoProps {
  store: any,
  todos: Todo[],
  filter: string
}

export interface TodoState {
  inputValue: string
}

let id = 0;

class TodoAppView extends React.Component<TodoProps, TodoState> {
  constructor() {
    super();
    
    this.state = {
      inputValue: ''
    };
  }
  onClick() {
    this.props.store.dispatch({
      type: ActionTypes.ADD_TODO,
      text: this.state.inputValue,
      id: id++
    });
    this.setState({inputValue: ''});
  }
  onInputChange(e) {
    this.setState({inputValue: e.target.value});
  }
  getFilteredTodos() {
    const {todos, filter: filterText} = this.props;

    switch(filterText) {
      case 'SHOW_ALL': return todos;
      case 'SHOW_COMPLETED': return todos.filter(todo => todo.completed);
      case 'SHOW_ACTIVE': return todos.filter(todo => !todo.completed);
    }
  }
  renderTodos() {
    return this.getFilteredTodos().map(todo => {
      return <TodoItemView key={todo.id} store={this.props.store} {...todo}>
                {todo.text}
             </TodoItemView>
    })
  }
  render() {
    const {store, filter:selected} = this.props;
    return (
      <div>
        <input value={this.state.inputValue} onChange={this.onInputChange.bind(this)} />
        <button onClick={this.onClick.bind(this)}>Add Todo</button>
        <ul className="todos">
          {this.renderTodos()}
        </ul>
        <p>
          <label className="filteritem">Show:</label> 
          <FilterLink selected={selected} filter="SHOW_ALL" store={store}>All</FilterLink>
          <FilterLink selected={selected} filter="SHOW_ACTIVE" store={store}>Active</FilterLink>
          <FilterLink selected={selected} filter="SHOW_COMPLETED" store={store}>Completed</FilterLink>
        </p>
      </div>
    )
  }
}

export default TodoAppView;
