import * as React from 'react';
import ActionTypes from '../reducers/ActionTypes.ts';
import TodoList from './TodoList.tsx';

class VisibleTodoList extends React.Component<any,any> {
  static contextTypes = {
    store: React.PropTypes.object
  };

  getVisibleTodos({todos, visibilityFilter}) {

    switch(visibilityFilter) {
      case 'SHOW_ALL': return todos;
      case 'SHOW_ACTIVE': return todos.filter(t => !t.completed);
      case 'SHOW_COMPLETED': return todos.filter(t => t.completed);
    }

    return todos;
  }
  toggleTodo(id) {
    this.context.store.dispatch({
      id,
      type: ActionTypes.TOGGLE_TODO
    })
  }

  render() {
    const state = this.context.store.getState();
    
    const visibleTodos = this.getVisibleTodos(state);

    return (
      <TodoList 
        todos={visibleTodos} 
        onTodoClick={this.toggleTodo.bind(this)} />
    )
  }
}

export default VisibleTodoList;