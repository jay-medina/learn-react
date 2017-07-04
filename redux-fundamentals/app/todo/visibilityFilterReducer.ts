export type TodoFilter = 'SHOW_ALL' | 'SHOW_COMPLETED' | 'SHOW_ACTIVE';

export interface FilterAction {
  type: 'SET_VISIBILITY_FILTER';
  filter: TodoFilter;
}

export function visibilityFilter(state = 'SHOW_ALL' as TodoFilter, action: FilterAction) {
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER': return action.filter;
    default: return state;
  }
}
