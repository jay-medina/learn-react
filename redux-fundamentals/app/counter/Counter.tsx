import * as React from 'react';
import { CounterAction } from './reducer';

export interface CounterProps {
  value?: number;
  dispatch: (action: CounterAction) => any;
}

const Counter = ({value, dispatch}: CounterProps) => {
  const onIncrement = () => dispatch({type: 'INCREMENT'});
  const onDecrement = () => dispatch({type: 'DECREMENT'});

  return (
    <div>
      <h1>{value}</h1>
      <div>
        <button className="counter__increment-btn" onClick={onIncrement}>+</button>
        <button className="counter__decrement-btn" onClick={onDecrement}>-</button>
      </div>
    </div>
  );
};

export { Counter };
