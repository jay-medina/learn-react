import * as React from 'react';
import AddTodo from './AddTodo.tsx';
import Footer from './Footer.tsx';
import VisibleTodoList from './VisibleTodoList.tsx';

function TodoApp() {
    return (
      <div>
        <AddTodo />
        <VisibleTodoList />
        <Footer />
      </div>
    )
}

export default TodoApp;