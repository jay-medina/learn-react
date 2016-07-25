import * as React from 'react';
import {Todo} from '../reducers/todosReducer.ts';
import TodoList from './TodoList.tsx';
import AddTodo from './AddTodo.tsx';
import Footer from './Footer.tsx';
import {addTodo, toggleTodo, setVisibilityFilter} from '../actionCreators.ts';

export interface TodoProps {
  dispatch: (any) => void,
  todos: Todo[],
  filter: string
}

function TodoAppView<TodoProps>(props) {
  const {filter:selected, dispatch} = props;

  return (
    <div>
      <AddTodo addTodo={(text) => dispatch(addTodo(text))} />
      <TodoList {...props} toggleTodo={(id) => dispatch(toggleTodo(id))} />
      <Footer selected={selected} setVisibilityFilter={(filter) => dispatch(setVisibilityFilter(filter))}/>
    </div>
  )
}

export default TodoAppView;
