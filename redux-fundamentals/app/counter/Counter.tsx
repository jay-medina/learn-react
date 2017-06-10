import * as React from 'react';

export interface CounterProps {
  value?: number;
  onIncrement: () => any;
  onDecrement: () => any;
}

const Counter = ({value, onDecrement, onIncrement}: CounterProps) => {
  return (
    <div>
      <h1>{value}</h1>
      <div>
        <button onClick={onIncrement}>+</button>
        <button onClick={onDecrement}>-</button>
      </div>
    </div>
  );
};

export { Counter };
