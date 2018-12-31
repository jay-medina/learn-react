import React from 'react';
import FilterLink from './FilterLink';

export default function Footer() {
    return (
        <p>
            Show:
            <FilterLink filter="SHOW_ALL" children="All"/>
            <FilterLink filter="SHOW_ACTIVE" children="Active" />
            <FilterLink filter="SHOW_COMPLETED" children="Completed" />
        </p>
    );
}
