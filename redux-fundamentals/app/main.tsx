import * as React from 'react';
import * as ReactDOM from 'react-dom';

import {counter} from './reducers/counter/counterReducer.ts';

counter(0, {type: 'INCREMENT'});
ReactDOM.render(
  <div>test</div>, 
  document.getElementById('app')
);