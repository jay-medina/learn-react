import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Hello } from './components/app.tsx';

ReactDOM.render(
  <Hello compiler="TypeScript" framework="React" />, 
  document.getElementById('app')
);