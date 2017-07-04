import { todos, TodoAction, Todo } from './todoListReducer';
import { visibilityFilter, FilterAction, TodoFilter } from './visibilityFilterReducer';

export interface TodoApp {
  todos: Todo[];
  visibilityFilter: TodoFilter;
}

export const todoApp = (state = {} as TodoApp, action: FilterAction | TodoAction): TodoApp => {
  return {
    todos: todos(
      state.todos,
      action as TodoAction,
    ),
    visibilityFilter: visibilityFilter(
      state.visibilityFilter,
      action as FilterAction,
    ),
  };
};
