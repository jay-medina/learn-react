import { AddTodoAction, Todo, todos, toggleTodo, ToggleTodoAction } from './reducer';

test('toggleTodo', () => {
    const todoBefore = {
        id: 0,
        text: 'Learn Redux',
        completed: false,
    };

    const todoAfter = {
        id: 0,
        text: 'Learn Redux',
        completed: true,
    };

    expect(toggleTodo(todoBefore)).toEqual(todoAfter);
});

describe('todos reducer', () => {
    test('default case', () => {
        expect(todos(undefined, {} as any)).toEqual([]);
    });

    test('add todo', () => {
        const stateBefore: Todo[] = [];

        const action: AddTodoAction = {
            type: 'ADD_TODO',
            id: 0,
            text: 'Learn Redux',
        };

        const stateAfter = [
            {
                id: 0,
                text: 'Learn Redux',
                completed: false,
            },
        ];

        expect(todos(stateBefore, action)).toEqual(stateAfter);
    });

    test('toggle todo', () => {
        const stateBefore: Todo[] = [
            {
                id: 0,
                text: 'Learn Redux',
                completed: false,
            },
            {
                id: 1,
                text: 'Go shopping',
                completed: false,
            },
        ];

        const action: ToggleTodoAction = {
            type: 'TOGGLE_TODO',
            id: 0,
        };

        const stateAfter = [
            {
                id: 0,
                text: 'Learn Redux',
                completed: false,
            },
            {
                id: 1,
                text: 'Go shopping',
                completed: true,
            },
        ];

        expect(todos(stateBefore, action)).toEqual(stateAfter);
    });
});
