import React from 'react';

interface Props {
    value: number;
    onIncrement(): void;
    onDecrement(): void;
    onRemove(): void;
}

interface CounterListProps {
    counters: number[];
    onAddCounter(): void;
    onIncrement(index: number): void;
    onDecrement(index: number): void;
    onRemoveCounter(index: number): void;
}

export const Counter = (props: Props) => {
    const { value, onIncrement, onDecrement, onRemove } = props;

    return (
        <div>
            <h1>{value}</h1>
            <button onClick={onIncrement}>+</button>
            <button onClick={onDecrement}>-</button>
            <button onClick={onRemove}>Remove</button>
        </div>
    );
};

export const CounterList = (props: CounterListProps) => {
    const { counters, onIncrement, onDecrement, onAddCounter, onRemoveCounter } = props;
    const onCounterIncrement = (index: number) => () => {
        onIncrement(index);
    };

    const onCounterDecrement = (index: number) => () => {
        onDecrement(index);
    };

    const onRemove = (index: number) => () => {
        onRemoveCounter(index);
    };

    const arr = counters.map((counter, index) => (
        <Counter
            key={index}
            value={counter}
            onIncrement={onCounterIncrement(index)}
            onDecrement={onCounterDecrement(index)}
            onRemove={onRemove(index)} />
    ));

    return (
        <div>
            <button onClick={onAddCounter}>Add</button>
            {arr}
        </div>
    );
};
