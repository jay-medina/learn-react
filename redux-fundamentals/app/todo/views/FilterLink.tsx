import * as React from 'react';
import ActionTypes from '../reducers/ActionTypes.ts';
import Link from './Link.tsx';

export interface FilterLinkProps {
  filter: string,
  onClick: (string) => void
  visibilityFilter: string,
}

class FilterLink extends React.Component<FilterLinkProps, any> {
  onClick(e) {
    e.preventDefault();
    this.props.onClick(this.props.filter);
  }
  render() {
    const {filter, visibilityFilter, children} = this.props;
    return (
      <Link active={filter === visibilityFilter} onClick={this.onClick.bind(this)}>{children}</Link>
    )
  }
}

export default FilterLink;