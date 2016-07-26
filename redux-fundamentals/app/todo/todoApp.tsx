import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {createStore} from 'redux';
import TodoAppReducer from './reducers/TodoAppReducer.ts';

export function initialize() {
  const store = createStore(TodoAppReducer);
  function print() {

    ReactDOM.render(
      <div>I am sad i started from scratch</div>, 
      document.getElementById('todoApp')
    );
  }

  print();

  store.subscribe(print);
}