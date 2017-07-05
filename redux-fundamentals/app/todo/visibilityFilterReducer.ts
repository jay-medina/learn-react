import { Action, Reducer } from 'redux';

export type TodoFilter = 'SHOW_ALL' | 'SHOW_COMPLETED' | 'SHOW_ACTIVE';

export interface FilterAction extends Action {
  type: 'SET_VISIBILITY_FILTER';
  filter: TodoFilter;
}

export interface VFReducer<S extends TodoFilter> extends Reducer<S> {
  <A extends FilterAction>(state: TodoFilter, action: A): S;
}

export const visibilityFilter: VFReducer<TodoFilter> = (state = 'SHOW_ALL' as TodoFilter, action: FilterAction) => {
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER': return action.filter;
    default: return state;
  }
};
