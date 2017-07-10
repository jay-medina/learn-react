import * as React from 'react';
import { FilterLink } from './FilterLink';
import { FilterAction, TodoFilter } from './reducers/visibilityFilterReducer';

export interface FooterProps {
  onFilterClick: (filter: string) => void;
  visibilityFilter: TodoFilter;
}
const Footer: React.StatelessComponent<FooterProps> = ({ onFilterClick, visibilityFilter }) => {
  return (
    <p>
      Show:
      <FilterLink
        filter={'SHOW_ALL'}
        onFilterClick={onFilterClick}
        active={visibilityFilter === 'SHOW_ALL'}
      >
        All
      </FilterLink>
      <FilterLink
        filter={'SHOW_COMPLETED'}
        onFilterClick={onFilterClick}
        active={visibilityFilter === 'SHOW_COMPLETED'}
      >
        Completed
      </FilterLink>
      <FilterLink
        filter={'SHOW_ACTIVE'}
        onFilterClick={onFilterClick}
        active={visibilityFilter === 'SHOW_ACTIVE'}
      >
        Active
      </FilterLink>
    </p>
  );
};

export default Footer;
