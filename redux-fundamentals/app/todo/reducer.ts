import { combineReducers } from 'redux';
import { Todo, TodoApp, TodoAppAction, ToggleTodoAction } from './types';
import { visibilityFilter } from './visibilityReducer';

export function toggleTodo(state: Todo, action: ToggleTodoAction): Todo {
    if (state.id !== action.id) {
        return state;
    }

    return {
        ...state,
        completed: !state.completed,
    };
}

export function todos(state: Todo[] = [], action: TodoAppAction): Todo[] {
    switch (action.type) {
        case 'ADD_TODO':
            return [
                ...state,
                {
                    id: action.id,
                    text: action.text,
                    completed: false,
                },
            ];

        case 'TOGGLE_TODO':
            return state.map(t => toggleTodo(t, action));

        default:
            return state;
    }
}

export const todoApp = combineReducers<TodoApp, TodoAppAction>({
    todos,
    visibilityFilter,
});
