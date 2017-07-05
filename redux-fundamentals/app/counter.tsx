import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { createStore, Store } from 'redux';
import CounterList from './counter/CounterList';
import { counterList as counterListReducer} from './counter/reducer';

function render(store: Store<number[]>, container: Element) {
  ReactDOM.render(
    <CounterList
      counters={store.getState()}
      dispatch={store.dispatch}
    />,
    container,
  );
}

export function start() {
  const container = document.querySelector('#counter-container');
  const store = createStore<number[]>(counterListReducer);
  store.subscribe(() => render(store, container as Element));
  render(store, container as Element);
}
