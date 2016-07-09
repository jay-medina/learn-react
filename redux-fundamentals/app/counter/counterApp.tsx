import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {counter, CounterActions} from './counterReducer.ts';

import Counter from './Counter.tsx';

export function initialize() {
  const store = createStore(counter);

  function print() {

    ReactDOM.render(
      <Counter value={store.getState()}
               onIncrement={ () => 
                 store.dispatch({ type: CounterActions.INCREMENT})
               }
               onDecrement={ () => 
                 store.dispatch({ type: CounterActions.DECREMENT})
               }/>, 
      document.getElementById('counterApp')
    );
  }

  store.subscribe(print);
  print();
}