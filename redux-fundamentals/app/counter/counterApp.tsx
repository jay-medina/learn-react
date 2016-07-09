import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {counter, CounterActions} from './counterReducer.ts';


function print() {

  ReactDOM.render(
     <div>test</div>, 
     document.getElementById('counterApp')
  );
}


export function initialize() {
  const store = createStore(counter);
  store.subscribe(print);
  print();
}