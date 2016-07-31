import * as React from 'react';
import AddTodo from './AddTodo.tsx';
import Footer from './Footer.tsx';
import VisibleTodoList from './VisibleTodoList.tsx';

export interface TodoAppProps {
  store: any
}

function TodoApp<TodoAppProps>(props) {
    return (
      <div>
        <AddTodo {...props}/>
        <VisibleTodoList {...props} />
        <Footer {...props}/>
      </div>
    )
}

export default TodoApp;