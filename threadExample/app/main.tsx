import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { App } from './components/app.tsx';

import * as Test from './tests/ThreadReducerTest.ts';

Test.execute();

ReactDOM.render(
  <App  />, 
  document.getElementById('app')
);