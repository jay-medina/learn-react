import {Action} from 'redux';

export interface Todo {
  id: number,
  text: string,
  completed: boolean
}

export const ActionTypes = {
  ADD_TODO: 'ADD_TODO',
  TOGGLE_TODO: 'TOGGLE_TODO'
};

export interface TodoAction extends Action {
  id: number,
  text?: string
}

function addTodoReducer(state: Todo[] = [], action: TodoAction) {
  return [
    ...state,
    {
      id: action.id,
      text: action.text,
      completed: false
    }
  ];
}

function toggleTodoReducer(state: Todo[] = [], action: TodoAction) {
  return state.map(t => {
    if (t.id !== action.id) {
      return state;
    }

    return Object.assign({}, t, { completed: !t.completed });
  });
}

export default function TodosReducer(state: Todo[] = [], action: TodoAction) {
  switch (action.type) {
    case ActionTypes.ADD_TODO: return addTodoReducer(state, action);
    case ActionTypes.TOGGLE_TODO: return toggleTodoReducer(state, action);
  }
  return state;
};