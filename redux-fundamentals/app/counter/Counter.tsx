import * as React from 'react';
import {CounterActions} from './counterReducer.ts';

export interface counterProps {
  value: number,
  index: number,
  store: any
}

export default function counter(props: counterProps) {
  const {index, value, store} = props;

  function incrementCounter(){
    store.dispatch({ index: index, type: CounterActions.INCREMENT})
  }

  const decrementCounter = () => {
    store.dispatch({ index: index, type: CounterActions.DECREMENT})
  };

  return (
    <div>
      <h1>{value}</h1>
      <button onClick={incrementCounter}>+</button>
      <button onClick={decrementCounter}>-</button>
    </div>
  );
}