import React from 'react';
import { Todo, VisibilityFilter } from './types';

interface Props {
    todos: Todo[];
    visibilityFilter: VisibilityFilter;
    onAddTodo(text: string): void;
    onItemClick(id: number): void;
    onFilterClick(filter: string): void;
}

interface TodoListProps {
    todos: Todo[];
    onItemClick(id: number): void;
}

interface FilterLinkProps {
    filter: VisibilityFilter;
    currentFilter: VisibilityFilter;
    onFilterClick(filter: string): void;
}

const FilterLink: React.SFC<FilterLinkProps> = props => {
    const { filter, currentFilter, children, onFilterClick } = props;

    const onClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        e.preventDefault();
        onFilterClick(filter);
    };

    if (filter === currentFilter) {
        return <span>{children}</span>;
    }

    return (
        <a href="#" onClick={onClick}>
            {children}
        </a>
    );
};

function TodoList({ todos, onItemClick }: TodoListProps) {
    const onTodoItemClick = (todo: Todo) => () => {
        onItemClick(todo.id);
    };

    const getListItem = (todo: Todo) => {
        const getClassName = () => {
            if (todo.completed) return 'completed';

            return '';
        };

        return (
            <li key={todo.id} onClick={onTodoItemClick(todo)} className={getClassName()}>
                {todo.text}
            </li>
        );
    };

    return <ul>{todos.map(getListItem)}</ul>;
}

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

export class TodoApp extends React.Component<Props> {
    state = {
        value: '',
    };

    onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
            value: e.currentTarget.value,
        });
    };

    onBtnClick = () => {
        const { value } = this.state;
        this.props.onAddTodo(value);
        this.setState({
            value: '',
        });
    };

    render() {
        const { onFilterClick, todos, onItemClick, visibilityFilter } = this.props;
        const todosToShow = getVisibleTodos(todos, visibilityFilter);

        return (
            <div>
                <input type="text" value={this.state.value} onChange={this.onChange} />
                <button onClick={this.onBtnClick}>Add Todo</button>
                <TodoList todos={todosToShow} onItemClick={onItemClick} />
                <p>
                    Show:
                    <FilterLink
                        filter="SHOW_ALL"
                        onFilterClick={onFilterClick}
                        currentFilter={visibilityFilter}
                    >
                        All
                    </FilterLink>
                    <FilterLink
                        filter="SHOW_ACTIVE"
                        onFilterClick={onFilterClick}
                        currentFilter={visibilityFilter}
                    >
                        Active
                    </FilterLink>
                    <FilterLink
                        filter="SHOW_COMPLETED"
                        onFilterClick={onFilterClick}
                        currentFilter={visibilityFilter}
                    >
                        Completed
                    </FilterLink>
                </p>
            </div>
        );
    }
}
