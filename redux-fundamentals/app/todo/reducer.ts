import { combineReducers, Reducer } from 'redux';
import { todos, TodoAction, Todo } from './todoListReducer';
import { visibilityFilter, FilterAction, TodoFilter } from './visibilityFilterReducer';

export interface TodoAppState {
  todos: Todo[];
  visibilityFilter: TodoFilter;
}

export interface TodoAppReducer<S> extends Reducer<S> {
  <A extends (TodoAction | FilterAction)>(state: S, action: A): S;
}

export const todoApp = combineReducers<TodoAppState>({
  todos,
  visibilityFilter,
}) as TodoAppReducer<TodoAppState>;
