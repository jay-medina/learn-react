import {CounterActions, counter} from './counterReducer.ts';

const MultiActions = {
  ADD_COUNTER: 'ADD_COUNTER', 
  REMOVE_COUNTER: 'REMOVE_COUNTER'
}

interface Action {
  type: string;
  index: number;
}

function runCounterReducer(state: number[], action: Action) {
  const result = [
    ...state.slice(0, action.index),
    counter(state[action.index], action),
    ...state.slice(action.index + 1)
  ];

  return result;
}

function multiCounter(state: number[], action: Action) {
  if (state === undefined) {
    return [0];
  }

  if (action.index < 0 || action.index >= state.length) {
    return state;
  }
  
  switch (action.type) {
    case MultiActions.ADD_COUNTER: return [...state, 0];
    case MultiActions.REMOVE_COUNTER: return state.slice(0, state.length-1);
    default: return runCounterReducer(state, action);
  }
}

export {MultiActions, Action, multiCounter};