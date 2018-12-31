import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, Store } from 'redux';
import { todoApp } from './reducer';
import { TodoApp } from './component';
import { TodoApp as TodoAppType, TodoAppAction, VisibilityFilter } from './types';
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

    const onToggleTodo = (id: number) => {
        store.dispatch({
            type: 'TOGGLE_TODO',
            id,
        });
    };

    const onFilterClick = (filter: VisibilityFilter) => {
        store.dispatch({
            type: 'SET_VISIBILITY_FILTER',
            visibilityFilter: filter,
        });
    };

    ReactDOM.render(
        <TodoApp
            onAddTodo={onAddTodo}
            onItemClick={onToggleTodo}
            onFilterClick={onFilterClick}
            {...store.getState()}
        />,
        todoContainer
    );
};

export function start() {
    const store = createStore(todoApp);
    store.subscribe(render(store));
    render(store)();
}
