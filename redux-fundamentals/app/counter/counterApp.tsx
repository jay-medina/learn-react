import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {multiCounter} from './multiCounterReducer.ts';
import Counters from './MultipleCounters.tsx';

export function initialize() {
  const store = createStore(multiCounter);

  function print() {

    ReactDOM.render(
      <Counters store = {store}
                values={store.getState()}
                 />, 
      document.getElementById('counterApp')
    );
  }

  store.subscribe(print);
  print();
}