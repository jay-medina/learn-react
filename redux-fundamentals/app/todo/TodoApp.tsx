import * as React from 'react';
import { Todo, TodoAction } from './todoListReducer';

interface TodoAppProps {
  dispatch: (action: TodoAction) => void;
  todos: Todo[];
}

interface TodoAppState {
  inputValue: string;
}

let id = 1;

class TodoApp extends React.PureComponent<TodoAppProps, TodoAppState> {
  constructor(props: TodoAppProps) {
    super(props);
    this.addTodo = this.addTodo.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
    this.state = {
      inputValue : '',
    };
  }
  onInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    e.preventDefault();
    this.setState({ inputValue: e.target.value });
  }
  toggleTodo(todo: Todo) {
    this.props.dispatch({
      type: 'TOGGLE_TODO',
      id: todo.id,
    });
  }
  addTodo() {
    this.props.dispatch({
      type: 'ADD_TODO',
      text: this.state.inputValue,
      id,
    });
    id += 1;
    this.setState({ inputValue: '' });
  }
  getClassName(todo: Todo) {
    if (todo.completed) {
      return 'completed';
    }

    return '';
  }
  renderTodos() {
    return this.props.todos.map((todo) => {
      return (
        <li
          key={todo.id}
          className={this.getClassName(todo)}
          onClick={this.toggleTodo.bind(this, todo)}
        >
          {todo.text}
        </li>
      );
    });
  }
  render() {
    return (
      <div>
        <input type="text" onChange={this.onInputChange} />
        <button onClick={this.addTodo}>Add Todo</button>
        <ul>
          {this.renderTodos()}
        </ul>
      </div>
    );
  }
}

export default TodoApp;
