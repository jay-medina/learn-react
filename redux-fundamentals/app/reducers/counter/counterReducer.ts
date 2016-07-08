interface Action {
  type: string;
}

function counter(state = 0, action: Action) {
  switch(action.type) {
    case 'INCREMENT': return state + 1;
    case 'DECREMENT': return state - 1;
    default: return state;
  }
}

function expect(actual:number, msg?: string) {
  
  return {
    toEqual: (expcted: number) => {
      console.assert(actual == expcted, `${actual} != ${expcted}`, msg);
    }
  }
}

expect(
  counter(0, {type: 'INCREMENT'})
).toEqual(1);

expect(
  counter(1, {type: 'INCREMENT'})
).toEqual(2);

expect(
  counter(2, {type: 'DECREMENT'})
).toEqual(1);

expect(
  counter(1, {type: 'DECREMENT'})
).toEqual(0);

expect(
  counter(1, {type: 'SOMETHING_ELSE'})
).toEqual(1);

expect(
  counter(undefined, {type: 'ACTION'}), 'initial state'
).toEqual(0);


export {Action, counter};