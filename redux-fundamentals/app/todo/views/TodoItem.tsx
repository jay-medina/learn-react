import * as React from 'react';
import {ActionTypes} from '../reducers/todosReducer.ts';

export interface TodoItemProps {
  store: any,
  id: number,
  completed: boolean
}

class TodoItemView extends React.Component<TodoItemProps, {}> {
  onClick() {
    this.props.store.dispatch({
      type: ActionTypes.TOGGLE_TODO,
      id: this.props.id
    });
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