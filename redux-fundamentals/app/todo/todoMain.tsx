import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { todoApp } from './reducer';

const render = () => {
    const todoContainer = document.getElementById('todo-container');

    // ReactDOM.render(
    //     <CounterList
    //         counters={store.getState()}
    //         onIncrement={onIncrement}
    //         onDecrement={onDecrement}
    //         onAddCounter={onAddCounter}
    //         onRemoveCounter={onRemoveCounter}
    //     />,
    //     counterContainer
    // );
};

export function start() {
    const store = createStore(todoApp);
    store.subscribe(render);
    render();
}
