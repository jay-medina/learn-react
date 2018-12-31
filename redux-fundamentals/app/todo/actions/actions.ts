import { TodoAppAction, VisibilityFilter } from '../types';

let nextTodoId = 0;

export function addTodoAction(text: string): TodoAppAction {
    return {
        type: 'ADD_TODO',
        text,
        id: nextTodoId++,
    };
}

export function toggleTodoAction(id: number): TodoAppAction {
    return {
        type: 'TOGGLE_TODO',
        id,
    };
}

export function setFilterAction(filter: VisibilityFilter): TodoAppAction {
    return {
        type: 'SET_VISIBILITY_FILTER',
        visibilityFilter: filter,
    };
}
