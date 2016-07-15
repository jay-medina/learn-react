import * as React from 'react';
import {Todo, ActionTypes} from '../reducers/todosReducer.ts';
import TodoItemView from './TodoItem.tsx';

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
      type: ActionTypes.ADD_TODO,
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
      return <TodoItemView key={todo.id} store={this.props.store} {...todo}>
                {todo.text}
             </TodoItemView>
    })
  }
  render() {
    return (
      <div>
        <input value={this.state.inputValue} onChange={this.onInputChange.bind(this)} />
        <button onClick={this.onClick.bind(this)}>Add Todo</button>
        <ul className="todos">
          {this.renderTodos()}
        </ul>
      </div>
    )
  }
}

export default TodoAppView;
