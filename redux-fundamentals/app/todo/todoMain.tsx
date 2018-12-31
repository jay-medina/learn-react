import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, Store } from 'redux';
import { todoApp } from './reducer';
import { TodoApp } from './component';
import { TodoApp as TodoAppType, TodoAppAction } from './types';
let nextTodoId = 0;

const render = (store: Store<TodoAppType, TodoAppAction>) => () => {
    const todoContainer = document.getElementById('todo-container');

    const onAddTodo = (text: string) => {
        store.dispatch({
            type: 'ADD_TODO',
            text,
            id: nextTodoId++,
        });
    };

    const { todos } = store.getState();

    ReactDOM.render(<TodoApp onClick={onAddTodo} todos={todos} />, todoContainer);
};

export function start() {
    const store = createStore(todoApp);
    store.subscribe(render(store));
    render(store)();
}
