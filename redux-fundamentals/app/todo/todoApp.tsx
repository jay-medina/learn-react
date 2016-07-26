import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {createStore} from 'redux';

export function initialize() {

  function print() {

    ReactDOM.render(
      <div>I am sad i started from scratch</div>, 
      document.getElementById('todoApp')
    );
  }

  print();
}