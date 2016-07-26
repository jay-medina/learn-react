import * as React from 'react';

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
            type: 'ADD_TODO',
            text: this.state.inputValue,
            id: id++
          });
    this.setState({inputValue: ''});
  }
  renderTodoList() {
    return this.props.todos.map(todo => {
      return <li key={todo.id}>{todo.text}</li>
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