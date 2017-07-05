import { Action, Reducer } from 'redux';

export interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

export interface TodoAction extends Action {
  type: 'ADD_TODO' | 'TOGGLE_TODO';
  id: number;
  text?: string;
}

function addTodo(state: Todo[], action: TodoAction) {
  return [
    ...state,
    {
      id: action.id,
      text: action.text,
      completed: false,
    },
  ] as Todo[];
}

function toggleTodo(state: Todo[], action: TodoAction) {
  return state.map((todo: Todo) => {
    if (todo.id === action.id) {
      return {
        ...todo,
        completed: !todo.completed,
      };
    }
    return todo;
  });
}

export interface TodosReducer<S extends Todo[]> extends Reducer<S> {
  <A extends TodoAction>(state: Todo[], action: A): S;
}

export const todos: TodosReducer<Todo[]> = (state = [] as Todo[], action: TodoAction) => {
  switch (action.type) {
    case 'ADD_TODO': return addTodo(state, action);
    case 'TOGGLE_TODO': return toggleTodo(state, action);
    default: return state;
  }
};
