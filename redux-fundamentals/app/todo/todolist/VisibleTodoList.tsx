import React, { Dispatch } from 'react';
import { connect } from 'react-redux';
import { Todo, VisibilityFilter, TodoApp, TodoAppAction } from '../types';
import { TodoItem } from './TodoItem';
import { toggleTodoAction } from '../actions/actions';

interface StateProps {
    todos: Todo[];
}

interface DispatchProps {
    onItemClick(id: number): void;
}

type Props = DispatchProps & StateProps;

function getVisibleTodos(todos: Todo[], filter: VisibilityFilter) {
    switch (filter) {
        case 'SHOW_ALL':
            return todos;
        case 'SHOW_ACTIVE':
            return todos.filter(t => !t.completed);
        default:
            return todos.filter(t => t.completed);
    }
}

function TodoList({ todos, onItemClick }: Props) {
    const onTodoItemClick = (todo: Todo) => () => {
        onItemClick(todo.id);
    };

    const listItem = (todo: Todo) => (
        <TodoItem key={todo.id} {...todo} onClick={onTodoItemClick(todo)} />
    );

    return <ul>{todos.map(listItem)}</ul>;
}

const mapStateToProps = (state: TodoApp): StateProps => ({
    todos: getVisibleTodos(state.todos, state.visibilityFilter),
});

const mapDispatchToProps = (dispatch: Dispatch<TodoAppAction>): DispatchProps => ({
    onItemClick(id) {
        dispatch(toggleTodoAction(id));
    },
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList);
