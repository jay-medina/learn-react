import * as React from 'react';
import ActionTypes from '../reducers/ActionTypes.ts';
import TodoList from './TodoList.tsx';

export interface VisibleTodoListProps {
  store: any
}

class VisibleTodoList extends React.Component<VisibleTodoListProps,{}> {
  getVisibleTodos({todos, visibilityFilter}) {

    switch(visibilityFilter) {
      case 'SHOW_ALL': return todos;
      case 'SHOW_ACTIVE': return todos.filter(t => !t.completed);
      case 'SHOW_COMPLETED': return todos.filter(t => t.completed);
    }

    return todos;
  }
  toggleTodo(id) {
    this.props.store.dispatch({
      id,
      type: ActionTypes.TOGGLE_TODO
    })
  }

  render() {
    const state = this.props.store.getState();
    
    const visibleTodos = this.getVisibleTodos(state);

    return (
      <TodoList 
        todos={visibleTodos} 
        onTodoClick={this.toggleTodo.bind(this)} />
    )
  }
}

export default VisibleTodoList;