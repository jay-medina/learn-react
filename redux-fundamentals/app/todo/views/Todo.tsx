import * as React from 'react';
import {Todo, ActionTypes} from '../reducers/todosReducer.ts';
import TodoList from './TodoList.tsx';
import AddTodo from './AddTodo.tsx';
import Footer from './Footer.tsx';

export interface TodoProps {
  dispatch: (any) => void,
  todos: Todo[],
  filter: string
}

let id = 0;

class TodoAppView extends React.Component<TodoProps, {}> {
  constructor() {
    super();
    
    this.addTodo = this.addTodo.bind(this);
    this.toggleTodo = this.toggleTodo.bind(this);
    this.setVisibilityFilter = this.setVisibilityFilter.bind(this);
  }
  addTodo(text) {
    this.props.dispatch({
      text,
      type: ActionTypes.ADD_TODO,
      id: id++
    });
  }
  toggleTodo(id) {
    this.props.dispatch({
      id,
      type: ActionTypes.TOGGLE_TODO
    });
  }
  setVisibilityFilter(filter) {
    this.props.dispatch({
      filter,
      type: 'SET_VISIBILITY_FILTER'
    });
  }
  render() {
    const {dispatch, filter:selected} = this.props;
    return (
      <div>
        <AddTodo addTodo={this.addTodo} />
        <TodoList {...this.props} toggleTodo={this.toggleTodo} />
        <Footer selected={selected} setVisibilityFilter={this.setVisibilityFilter}/>
      </div>
    )
  }
}

export default TodoAppView;
