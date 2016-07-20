import * as React from 'react';
import FilterLink from './FilterLink.tsx';

export interface FooterProps {
  selected: string,
  setVisibilityFilter: (filter:string) => void
}

class Footer extends React.Component<FooterProps, {}> {
  
  render() {
    const {selected, setVisibilityFilter} = this.props;
    return (
      <p>
        <label className="filteritem">Show:</label> 
        <FilterLink selected={selected} filter="SHOW_ALL" onFilterClick={setVisibilityFilter}>All</FilterLink>
        <FilterLink selected={selected} filter="SHOW_ACTIVE" onFilterClick={setVisibilityFilter}>Active</FilterLink>
        <FilterLink selected={selected} filter="SHOW_COMPLETED" onFilterClick={setVisibilityFilter}>Completed</FilterLink>
      </p>
    );
  }
}

export default Footer;