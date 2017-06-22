export interface Action {
  type: 'INCREMENT' | 'DECREMENT';
}

export function counter (state = 0, action: Action) {
  switch ( action.type ) {
    case 'INCREMENT' : return state + 1;
    case 'DECREMENT' : return state - 1;
    default: return state;
  }
}

export function addCounter (list: number[]) {
  return [...list, 0];
}

export function removeCounter (list: number[], index: number) {
  return [...list.slice(0, index), ...list.slice(index + 1)];
}

export function incrementCounter (list: number[], index: number) {
  return [
    ...list.slice(0, index),
    list[index] + 1,
    ...list.slice(index + 1),
  ];
}
