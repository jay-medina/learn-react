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

/*function expect(actual:number, msg?: string) {
  
  return {
    toEqual: (expcted: number) => {
      console.assert(actual == expcted, `${actual} != ${expcted}`, msg);
    }
  }
}

expect(
  counter(0, {type: 'INCREMENT'})
).toEqual(1);
*/
export {Action, counter};