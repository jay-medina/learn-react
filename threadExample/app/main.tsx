import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {createStore} from 'redux';

import MultiThreadReducer from './reducers/MultiThreadReducer';

import { App } from './components/app';
const store = createStore(MultiThreadReducer);
const person = 'Jose Medina';

function print() {
  ReactDOM.render(
    <App store={store} person={person}/>, 
    document.getElementById('app')
  );
}

store.subscribe(print);
print();