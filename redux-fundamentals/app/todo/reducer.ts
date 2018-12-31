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

export function toggleTodo(todo: Todo): Todo {
    return {
        ...todo,
        completed: !todo.completed,
    };
}

export function todos(state: Todo[] = [], action: TodoListAction): Todo[] {
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
            return state.map(todo => {
                if (todo.id !== action.id) {
                    return todo;
                }

                return {
                    ...todo,
                    completed: !todo.completed,
                };
            });
        default:
            return state;
    }
}
