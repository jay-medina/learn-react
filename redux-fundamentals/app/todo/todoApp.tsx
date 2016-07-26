import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {createStore} from 'redux';

import App from './views/App.tsx';
import TodoAppReducer from './reducers/TodoAppReducer.ts';

export function initialize() {
  const store = createStore(TodoAppReducer);

  function print() {

    ReactDOM.render(
      <App todos={store.getState().todos} dispatch={store.dispatch}/>, 
      document.getElementById('todoApp')
    );
  }

  print();

  store.subscribe(print);
}