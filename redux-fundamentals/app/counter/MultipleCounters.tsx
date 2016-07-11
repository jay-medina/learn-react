import * as React from 'react';
import Counter from './Counter.tsx';
import {MultiActions} from './multiCounterReducer.ts';

export interface MultiCounterProps {
  values: number[],
  store: any
}

export default function Counters(props: MultiCounterProps) {
  const {store} = props;

  const addCounter = () => {
    store.dispatch({type: MultiActions.ADD_COUNTER}) 
  }

  const removeCounter= () => {
    store.dispatch({type: MultiActions.REMOVE_COUNTER})
  } 

  const renderCounters = () => {
    return props.values.map((value, index) => {
      return <Counter value={value}
                      index={index}
                      store = {store}
                      key={index} />;
    });
  }

  return (
    <div>
      {renderCounters()}
      <p>
      <button onClick={addCounter}>Add Counter</button>
      <button onClick={removeCounter}>Remove Counter</button>
      </p>
    </div>
  );
}