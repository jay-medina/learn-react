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

function compare(one: any, two: any, msg?: string) {

  console.log(`${one} === ${two} ==> ${JSON.stringify(one) === JSON.stringify(two)}`, msg);
}

compare(multiCounter(
  undefined,
  undefined
), [0], 'default');

compare(multiCounter(
  [0, 4, 4],
  { type: CounterActions.INCREMENT, index: 0 }
), [1, 4, 4], 'increment index');

compare(multiCounter(
  [0, 4, 4],
  { type: CounterActions.DECREMENT, index: 2 }
), [0, 4, 3], 'decrement index');

compare(multiCounter(
  [0, 4, 4],
  { type: CounterActions.INCREMENT, index: 10 }
), [0, 4, 4], 'increment bad index');

compare(multiCounter(
  [0, 4, 4],
  { type: CounterActions.DECREMENT, index: 10 }
), [0, 4, 4], 'decrement bad index');