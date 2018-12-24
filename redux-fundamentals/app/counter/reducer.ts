import { Action } from 'redux';

export interface CounterAction extends Action {
    type: 'INCREMENT' | 'DECREMENT';
}

interface AddCounterAction extends Action {
    type: 'ADD';
}

interface RemoveCounterAction extends Action {
    type: 'REMOVE';
    payload: {
        index: number;
    };
}

interface IncrementCounterAction extends Action {
    type: CounterAction['type'];
    payload: {
        index: number;
    };
}

export type CounterListAction = AddCounterAction | RemoveCounterAction | IncrementCounterAction;

export function counter(state = 0, action: CounterAction): number {
    switch (action.type) {
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1;
    }

    return state;
}

export function counterList(state = [] as number[], action: CounterListAction): number[] {
    switch (action.type) {
        case 'ADD':
            return addCounter(state);
        case 'REMOVE':
            return removeCounter(state, action.payload.index);
        case 'INCREMENT':
        case 'DECREMENT':
            return incrementCounter(state, action);
        default:
            return state;
    }
}

export function addCounter(state: number[]): number[] {
    return [...state, 0];
}

export function removeCounter(state: number[], index: number): number[] {
    return [
        ...state.slice(0, index),
        ...state.slice(index + 1)
    ];
}

export function incrementCounter(state: number[], action: IncrementCounterAction): number[] {
    const { index } = action.payload;

    if (index < 0 || index >= state.length) return state;

    return [
        ...state.slice(0, index),
        counter(state[index], action),
        ...state.slice(index + 1)
    ];
}
