export interface CounterAction {
  type: 'INCREMENT' | 'DECREMENT' | string;
  index?: number;
}

export interface CounterListAction {
  type: 'ADD_COUNTER' | 'REMOVE_COUNTER' | string;
  index?: number;
}

function counter(state = 0, action: CounterAction) {
  switch ( action.type ) {
    case 'INCREMENT' : return state + 1;
    case 'DECREMENT' : return state - 1;
    default: return state;
  }
}

function addCounter (list: number[]) {
  return [...list, 0];
}

function removeCounter (list: number[], index: number) {
  return [...list.slice(0, index), ...list.slice(index + 1)];
}

function modifyCounter (list: number[], action: CounterAction) {
  const { index } = action;
  if (typeof index === 'number') {
    return [
      ...list.slice(0, index),
      counter(list[index], action),
      ...list.slice(index + 1),
    ];
  }

  return list;
}

export function counterList(state: number[] = [], action: CounterListAction | CounterAction) {
  switch (action.type) {
    case 'ADD_COUNTER': return addCounter(state);
    case 'REMOVE_COUNTER':
      if (action.index === undefined) {
        return state;
      }
      return removeCounter(state, action.index);
    default: return modifyCounter(state, action);
  }
}
