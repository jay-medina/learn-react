import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { App } from './components/app.tsx';

import * as Test from './tests/ThreadReducerTest.ts';
import * as MultiReducerTest from './tests/MultiThreadReducerTest.ts';

Test.execute();
MultiReducerTest.execute();

ReactDOM.render(
  <App  />, 
  document.getElementById('app')
);