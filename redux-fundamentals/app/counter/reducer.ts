export interface Action {
  type: 'INCREMENT' | 'DECREMENT';
}

export function counter(state = 0, action: Action) {
  switch ( action.type ) {
    case 'INCREMENT' : return state + 1;
    case 'DECREMENT' : return state - 1;
    default: return state;
  }
}

export function addCounter(list: Array<number>) {
  return [...list, 0];
}

export function removeCounter(list: Array<number>, index: number) {
  
}
