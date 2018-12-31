import { VisibilityFilter, TodoAppAction } from '../types';

export function visibilityFilter(
    state: VisibilityFilter = 'SHOW_ALL',
    action: TodoAppAction
): VisibilityFilter {
    if (action.type === 'SET_VISIBILITY_FILTER') {
        return action.visibilityFilter;
    }

    return state;
}
