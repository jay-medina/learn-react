import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { todoApp } from './reducer/reducer';
import { TodoApp } from './component';

export function start() {
    const store = createStore(todoApp);
    const todoContainer = document.getElementById('todo-container');
    ReactDOM.render(
        <Provider store={store}>
            <TodoApp />
        </Provider>,
        todoContainer
    );
}
