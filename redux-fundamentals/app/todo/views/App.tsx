import * as React from 'react';
import ActionTypes from '../reducers/ActionTypes.ts';
import FilterLink from './FilterLink.tsx';
import TodoList from './TodoList.tsx';
import AddTodo from './AddTodo.tsx';
import Footer from './Footer.tsx';

let id = 0;

export interface TodoAppProps {
  todos: any[],
  visibilityFilter: string,
  dispatch: (any) => void
}

class TodoApp extends React.Component<TodoAppProps,{}> {

  addTodo(text) {
    this.props.dispatch({
      text,
      type: ActionTypes.ADD_TODO,
      id: id++
    });

    this.setState({inputValue: ''});
  }
  toggleTodo(id) {
    this.props.dispatch({
      id,
      type: ActionTypes.TOGGLE_TODO
    })
  }
  getVisibleTodos(todos, filter) {
    switch(filter) {
      case 'SHOW_ALL': return todos;
      case 'SHOW_ACTIVE': return todos.filter(t => !t.completed);
      case 'SHOW_COMPLETED': return todos.filter(t => t.completed);
    }

    return todos;
  }
  render() {
    const {todos, visibilityFilter, dispatch} = this.props;
    const visibleTodos = this.getVisibleTodos(todos, visibilityFilter);

    return (
      <div>
        <AddTodo onAddClick={this.addTodo.bind(this)}/>
        <TodoList todos={visibleTodos} onTodoClick={this.toggleTodo.bind(this)} />
        <Footer {...this.props}/>
      </div>
    )
  }
}

export default TodoApp;