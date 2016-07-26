import * as React from 'react';
import ActionTypes from '../reducers/ActionTypes.ts';

let id = 0;

export interface TodoAppProps {
  todos: any[],
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
  getTodoItemClassName(todo) {
    return todo.completed? 'completed todoItem' : 'todoItem';
  }
  renderTodoList() {
    return this.props.todos.map(todo => {
      return <li key={todo.id} onClick={this.toggleTodo.bind(this, todo.id)} 
                 className={this.getTodoItemClassName(todo)}>
              {todo.text}
             </li>
    })
  }
  render() {
    return (
      <div>
        <input value={this.state.inputValue} onChange={this.updateInputValue.bind(this)} />
        <button onClick={this.addTodo.bind(this)}>Add Todo</button>
        <ul>
          {this.renderTodoList()}
        </ul>
      </div>
    )
  }
}

export default TodoApp;