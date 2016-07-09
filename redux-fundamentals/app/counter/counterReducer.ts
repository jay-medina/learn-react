interface Action {
  type: CounterActions;
}

export enum CounterActions {
  INCREMENT, DECREMENT
}

function counter(state = 0, action: Action) {
  switch(action.type) {
    case CounterActions.INCREMENT : return state + 1;
    case CounterActions.DECREMENT : return state - 1;
    default: return state;
  }
}

export {Action, counter};