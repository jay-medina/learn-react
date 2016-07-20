import * as React from 'react';

export interface TodoState {
  inputValue: string
}

export interface AddTodoProps {
  addTodo: (value) => void
}

class AddTodo extends React.Component<AddTodoProps, TodoState> {
  constructor() {
    super();

    this.state = {
      inputValue: ''
    };

    this.addTodo = this.addTodo.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
  }
  addTodo(e) {
    e.preventDefault();

    this.props.addTodo(this.state.inputValue);
    this.setState({inputValue: ''});
  }
  onInputChange(e) {
    this.setState({inputValue: e.target.value});
  }
  render() {
    return (
      <div>
        <input value={this.state.inputValue} onChange={this.onInputChange} />
        <button onClick={this.addTodo}>Add Todo</button>
      </div>
    );
  }
}

export default AddTodo;