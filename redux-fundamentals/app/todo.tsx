import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { createStore, Store } from 'redux';
import { todoApp, TodoAppState } from './todo/reducer';
import TodoApp from './todo/TodoApp';

function render(store: Store<TodoAppState>, container: Element) {
  ReactDOM.render(
    <TodoApp
      {...store.getState()}
      dispatch={store.dispatch}
    />,
    container,
  );
}

export function start() {
  const container = document.querySelector('#todo-container');
  const store = createStore<TodoAppState>(
    todoApp,
  );
  store.subscribe(() => render(store, container as Element));
  render(store, container as Element);
}
