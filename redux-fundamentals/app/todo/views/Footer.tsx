import * as React from 'react';
import FilterLink from './FilterLink.tsx';

export interface FooterProps {
  visibilityFilter: string,
  onFilterClick: (string) => void
}

class Footer extends React.Component<FooterProps,{}> {
  render() {
    const {onFilterClick, visibilityFilter} = this.props;
    
    return (
      <p>
        Show:
        <FilterLink currentFilter={visibilityFilter} filter='SHOW_ALL' onClick={onFilterClick}>All</FilterLink>
        <FilterLink currentFilter={visibilityFilter} filter='SHOW_ACTIVE' onClick={onFilterClick}>Active</FilterLink>
        <FilterLink currentFilter={visibilityFilter} filter='SHOW_COMPLETED' onClick={onFilterClick}>Completed</FilterLink>
      </p>
    );
  }
}

export default Footer;