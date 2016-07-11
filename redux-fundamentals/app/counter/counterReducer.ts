export interface Action {
  type: string;
}

export const CounterActions = {
  INCREMENT: 'INCREMENT',
  DECREMENT: 'DECREMENT'
};

export function counter(state = 0, action: Action) {
  switch(action.type) {
    case CounterActions.INCREMENT : return state + 1;
    case CounterActions.DECREMENT : return state - 1;
    default: return state;
  }
}