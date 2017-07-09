import * as React from 'react';
import { TodoFilter, FilterAction } from './visibilityFilterReducer';

export interface FilterLinkProps {
  filter: TodoFilter;
  dispatch: (action: FilterAction) => void;
  active?: boolean;
}

function onClick(props: FilterLinkProps) {
  return (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    props.dispatch({
      type: 'SET_VISIBILITY_FILTER',
      filter: props.filter,
    });
  };
}

export const FilterLink: React.StatelessComponent<FilterLinkProps> = (props) => {
  const { active = false } = props;

  if (active) {
    return (
      <span className="filterLink">{props.children}</span>
    );
  }

  return (
    <a href="#" className="filterLink" onClick={onClick(props)}>{props.children}</a>
  );
};
