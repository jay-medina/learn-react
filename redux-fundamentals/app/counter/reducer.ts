import { Action } from 'redux';

export interface CounterAction extends Action {
    type: 'INCREMENT' | 'DECREMENT';
}

export function counter(state = 0, action: CounterAction): number {
    switch (action.type) {
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1;
    }

    return state;
}
