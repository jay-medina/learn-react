import React from 'react';

interface TodoProps {
    completed: boolean;
    text: string;
    onClick(): void;
}

export function TodoItem({ onClick, completed, text }: TodoProps) {
    const className = completed ? 'completed' : '';

    return (
        <li onClick={onClick} className={className}>
            {text}
        </li>
    );
}
