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
        <FilterLink filter='SHOW_ALL' visibilityFilter={visibilityFilter} onClick={onFilterClick}>All</FilterLink>
        <FilterLink filter='SHOW_ACTIVE' visibilityFilter={visibilityFilter} onClick={onFilterClick}>Active</FilterLink>
        <FilterLink filter='SHOW_COMPLETED' visibilityFilter={visibilityFilter} onClick={onFilterClick}>Completed</FilterLink>
      </p>
    );
  }
}

export default Footer;