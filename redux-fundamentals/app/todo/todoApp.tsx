import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {createStore} from 'redux';
import TodoAppReducer from './todoAppReducer.ts';

export function initialize() {
  const store = createStore(TodoAppReducer);
  function print() {

    ReactDOM.render(
      <div>hello world</div>, 
      document.getElementById('todoApp')
    );
  }

  store.subscribe(print);

  print();
}