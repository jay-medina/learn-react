import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {createStore} from 'redux';
import TodoAppReducer, {ITodoAppReducer} from './reducers/todoAppReducer.ts';
import {loadState} from './reducers/localstorage.ts';

import TodoAppView from './views/Todo.tsx';

export function initialize() {
  const persistedState = loadState();

  const store = createStore<ITodoAppReducer>(TodoAppReducer, persistedState);
  function print() {
    const state = store.getState();

    ReactDOM.render(
      <TodoAppView dispatch={store.dispatch} todos={state.todos} filter={state.visibilityFilter} />, 
      document.getElementById('todoApp')
    );
  }

  store.subscribe(print);

  print();
}