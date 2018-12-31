import { Action } from 'redux';

export interface Todo {
    id: number;
    text: string;
    completed: boolean;
}

export interface AddTodoAction extends Action {
    type: 'ADD_TODO';
    id: number;
    text: string;
}

export interface ToggleTodoAction extends Action {
    type: 'TOGGLE_TODO';
    id: number;
}

export type TodoListAction = AddTodoAction | ToggleTodoAction;

export interface TodoApp {
    todos: Todo[];
    visibilityFilter: VisibilityFilter;
}

export type VisibilityFilter = 'SHOW_ALL' | 'SHOW_ACTIVE' | 'SHOW_COMPLETED';

export interface SetFilterAction extends Action {
    type: 'SET_VISIBILITY_FILTER';
    visibilityFilter: VisibilityFilter;
}

export type TodoAppAction = TodoListAction | SetFilterAction;
