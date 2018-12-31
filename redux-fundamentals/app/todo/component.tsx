import React from 'react';
import { Todo } from './types';

interface Props {
    todos: Todo[];
    onClick(text: string): void;
}

interface TodoListProps {
    todos: Todo[];
}

function TodoList({ todos }: TodoListProps) {
    const getListItem = (todo: Todo) => <li key={todo.id}>{todo.text}</li>;

    return <ul>{todos.map(getListItem)}</ul>;
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
        this.props.onClick(value);
        this.setState({
            value: '',
        });
    };

    render() {
        return (
            <div>
                <input type="text" value={this.state.value} onChange={this.onChange} />
                <button onClick={this.onBtnClick}>Add Todo</button>
                <TodoList todos={this.props.todos} />
            </div>
        );
    }
}
