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
        <button className="counter__increment-btn" onClick={onIncrement}>+</button>
        <button className="counter__decrement-btn" onClick={onDecrement}>-</button>
      </div>
    </div>
  );
};

export { Counter };
