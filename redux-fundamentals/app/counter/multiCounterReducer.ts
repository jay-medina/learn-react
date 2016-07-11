import {CounterActions, counter} from './counterReducer.ts';

export const MultiActions = {
  ADD_COUNTER: 'ADD_COUNTER', 
  REMOVE_COUNTER: 'REMOVE_COUNTER'
}

export interface Action {
  type: string;
  index: number;
}

function runCounterReducer(state, action) {
  return [
    ...state.slice(0, action.index),
    counter(state[action.index], action),
    ...state.slice(action.index + 1)
  ];
}

export function multiCounter(state = [0], action: Action) {
  if (action === undefined) {
    return state;
  }

  if (action.index < 0 || action.index >= state.length) {
    return state;
  }

  switch (action.type) {
    case MultiActions.ADD_COUNTER: return state;
    case MultiActions.REMOVE_COUNTER: return state;
    default: return runCounterReducer(state, action);
  }
}