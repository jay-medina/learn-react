import * as React from 'react';

export interface counterProps {
  value: number,
  onIncrement: () => void,
  onDecrement: () => void
}

export default function counter(props: counterProps) {
  return (
    <div>
      <h1>{props.value}</h1>
      <button onClick={props.onIncrement}>+</button>
      <button onClick={props.onDecrement}>-</button>
    </div>
  );
}