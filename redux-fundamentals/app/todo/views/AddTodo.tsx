import * as React from 'react';

export interface AddTodoProps {
  onAddClick: (string) => void
}

export interface AddTodoState {
  inputValue: string
}

class AddTodo extends React.Component<AddTodoProps,AddTodoState> {
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

  onClick() {
    this.props.onAddClick(this.state.inputValue);
    this.setState({inputValue: ''});
  }

  render() {
    return (
      <div>
        <input value={this.state.inputValue} onChange={this.updateInputValue.bind(this)} />
        <button onClick={this.onClick.bind(this)}>Add Todo</button>
      </div>
    )
  }
}

export default AddTodo;