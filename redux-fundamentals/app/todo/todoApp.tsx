import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {createStore} from 'redux';
import TodoAppReducer, {ITodoAppReducer} from './todoAppReducer.ts';

import TodoAppView from './Todo.tsx';

export function initialize() {
  const store = createStore<ITodoAppReducer>(TodoAppReducer);
  function print() {

    ReactDOM.render(
      <TodoAppView store={store} todos={store.getState().todos} />, 
      document.getElementById('todoApp')
    );
  }

  store.subscribe(print);

  print();
}