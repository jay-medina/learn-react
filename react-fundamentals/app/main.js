import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './lesson11/App';

function render(update, val) {
  ReactDOM.render(<App update={update} val={val} />, document.getElementById('app'));
}

function update() {
  const el = document.getElementById('app');
  let val = 0;

  return function rerender() {
    val += 1;
    render(rerender, val);
  }
}

render(update(), 0);
