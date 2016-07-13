import {Action} from 'redux';
import TodosReducer, {Todo, TodoAction} from './todosReducer.ts';
import VisibilityReducer, {VisibilityAction} from './visibilityReducer.ts';

export interface TodoApp {
  todos: Todo[],
  visibilityFilter: string
}

export default function TodoAppReducer(state = {} as TodoApp, action: Action) {
  return {
    todos: TodosReducer(
      state.todos,
      action as TodoAction
    ),
    visibilityFilter: VisibilityReducer(
      state.visibilityFilter,
      action as VisibilityAction
    )
  };
}