import * as React from 'react';

export interface TodoItemProps {
  id: number,
  completed: boolean,
  onClick: (id) => void
}

class TodoItemView extends React.Component<TodoItemProps, {}> {
  onClick() {
    this.props.onClick(this.props.id);
  }
  addClassNames() {
    if(this.props.completed) {
      return 'todoItem completed';
    }
    return 'todoItem';
  }
  render() {
    return (
      <li className={this.addClassNames()}
          onClick={this.onClick.bind(this)}>{this.props.children}</li>
    )
  }
}

export default TodoItemView;