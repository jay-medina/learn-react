import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { createStore, Store } from 'redux';
import { todoApp, TodoAppState } from './todo/reducer';
import TodoApp from './todo/TodoApp';

function render(store: Store<TodoAppState>, container: Element) {
  const {todos, visibilityFilter} = store.getState();
  ReactDOM.render(
    <TodoApp
      todos={todos}
      dispatch={store.dispatch}
      visibilityFilter={visibilityFilter}
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
