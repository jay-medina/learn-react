import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {createStore} from 'redux';

import MultiThreadReducer from './reducers/MultiThreadReducer.ts';

import { App } from './components/app.tsx';
const store = createStore(MultiThreadReducer);
const person = 'jose';

function print() {
  ReactDOM.render(
    <App store={store} person={person}/>, 
    document.getElementById('app')
  );
}

store.subscribe(print);
print();