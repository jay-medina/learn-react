import React from 'react';
import VisibleTodoList from './todolist/VisibleTodoList';
import AddTodo from './addtodo/AddTodo';
import Footer from './footer/Footer';

export const TodoApp = () => (
    <div>
        <AddTodo />
        <VisibleTodoList />
        <Footer />
    </div>
);
