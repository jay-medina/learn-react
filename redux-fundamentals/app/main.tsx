import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { CounterList } from './counter/component';
import { counterList } from './counter/reducer';

const store = createStore(counterList);

const onIncrement = (index: number) => {
    store.dispatch({ type: 'INCREMENT', payload: { index } });
};

const onDecrement = (index: number) => {
    store.dispatch({ type: 'DECREMENT', payload: { index } });
};

const onAddCounter = () => {
    store.dispatch({ type: 'ADD' });
};

const onRemoveCounter = (index: number) => {
    store.dispatch({ type: 'REMOVE', payload: { index } });
};

const render = () => {
    const counterContainer = document.getElementById('counter-container');

    ReactDOM.render(
        <CounterList
            counters={store.getState()}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
            onAddCounter={onAddCounter}
            onRemoveCounter={onRemoveCounter}
        />,
        counterContainer
    );
};

store.subscribe(render);
render();
