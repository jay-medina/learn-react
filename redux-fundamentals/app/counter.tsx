import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {createStore} from 'redux';
import CounterList from './counter/CounterList';
import { counterList as counterListReducer} from './counter/reducer';

const contextWindow = (window as any);
const container = document.querySelector('#container');
const store = createStore<number[]>(
  counterListReducer,
  contextWindow.__REDUX_DEVTOOLS_EXTENSION__ && contextWindow.__REDUX_DEVTOOLS_EXTENSION__());

function render() {
  ReactDOM.render(
    <CounterList
      counters={store.getState()}
      dispatch={store.dispatch}
    />,
    container,
  );
}
store.subscribe(render);

render();
