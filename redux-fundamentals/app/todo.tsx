import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { todoApp, TodoAppState } from './todo/reducer';
import TodoApp from './todo/TodoApp';

const contextWindow = (window as any);
const container = document.querySelector('#todo-container');
const store = createStore<TodoAppState>(
  todoApp,
);

function render() {
  ReactDOM.render(
    <TodoApp />,
    container,
  );
}

store.subscribe(render);

render();
