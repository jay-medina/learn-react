import React from 'react';

interface Props {
    value: number;
    onIncrement(): void;
    onDecrement(): void;
}

interface CounterListProps {
    counters: number[];
    onAddCounter(): void;
    onIncrement(index: number): void;
    onDecrement(index: number): void;
}

export const Counter = ({ value, onIncrement, onDecrement }: Props) => (
    <div>
        <h1>{value}</h1>
        <button onClick={onIncrement}>+</button>
        <button onClick={onDecrement}>-</button>
        <button>Remove</button>
    </div>
);

export const CounterList = (props: CounterListProps) => {
    const { counters, onIncrement, onDecrement, onAddCounter } = props;
    const onCounterIncrement = (index: number) => () => {
        onIncrement(index);
    };

    const onCounterDecrement = (index: number) => () => {
        onDecrement(index);
    };

    const arr = counters.map((counter, index) => (
        <Counter
            key={index}
            value={counter}
            onIncrement={onCounterIncrement(index)}
            onDecrement={onCounterDecrement(index)} />
    ));

    return (
        <div>
            <button onClick={onAddCounter}>Add</button>
            {arr}
        </div>
    );
};
