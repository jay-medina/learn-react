import * as React from 'react';
import {Todo} from './todosReducer.ts';

export interface TodoProps {
  store: any,
  todos: Todo[]
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
      type: 'ADD_TODO',
      text: this.state.inputValue,
      id: id++
    });
    this.setState({inputValue: ''});
  }
  onInputChange(e) {
    this.setState({inputValue: e.target.value});
  }
  renderTodos() {
    return this.props.todos.map(todo => {
      return <li key={todo.id}>{todo.text}</li>
    });
  }
  render() {
    return (
      <div>
        <input value={this.state.inputValue} onChange={this.onInputChange.bind(this)} />
        <button onClick={this.onClick.bind(this)}>Add Todo</button>
        <ul>
          {this.renderTodos()}
        </ul>
      </div>
    )
  }
}

export default TodoAppView;
