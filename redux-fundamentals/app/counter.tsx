import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {createStore} from 'redux';
import { Counter } from './counter/Counter';
import { Action as CounterAction, counter} from './counter/reducer';

const container = document.querySelector('#container');
const store = createStore(counter);

function onIncrement() {
  store.dispatch<CounterAction>({ type: 'INCREMENT'});
}

function onDecrement() {
  store.dispatch<CounterAction>({ type: 'DECREMENT'});
}

function render() {
  ReactDOM.render(
    <Counter 
      value={store.getState()} 
      onIncrement={onIncrement}
      onDecrement={onDecrement}
    />,
    container,
  );
}
store.subscribe(render)

render();
