import * as React from 'react';
import { TodoFilter } from './reducers/visibilityFilterReducer';

export interface FilterLinkProps {
  filter: TodoFilter;
  active?: boolean;
  onFilterClick: (filter: TodoFilter) => void;
}

function onClick(props: FilterLinkProps) {
  return (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    props.onFilterClick(props.filter);
  };
}

export const FilterLink: React.StatelessComponent<FilterLinkProps> = (props) => {
  const { active = false, onFilterClick, filter } = props;

  if (active) {
    return (
      <span className="filterLink">{props.children}</span>
    );
  }

  return (
    <a href="#" className="filterLink" onClick={onClick(props)}>{props.children}</a>
  );
};
