import {ActionTypes} from './reducers/todosReducer.ts';
import {v4} from 'node-uuid';

export function addTodo(text) {
  return {
    text,
    type: ActionTypes.ADD_TODO,
    id: v4()
  }
}

export function toggleTodo(id) {
  return {
      id,
      type: ActionTypes.TOGGLE_TODO
  };
}

export function setVisibilityFilter(filter) {
  return {
    filter,
    type: 'SET_VISIBILITY_FILTER'
  }
}