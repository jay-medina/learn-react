import * as React from 'react';

export interface TodoProps {
  onClick: () => void,
  id: number,
  completed: boolean,
  text: string
}

class Todo extends React.Component<TodoProps,{}> {
  getTodoItemClassName() {
    return this.props.completed? 'completed todoItem' : 'todoItem';
  }
  render() {
    return (
      <li onClick={this.props.onClick} 
          className={this.getTodoItemClassName()}>
          {this.props.text}
      </li>
    );
  }
}

export default Todo;