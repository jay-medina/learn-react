import * as React from 'react';
import ActionTypes from '../reducers/ActionTypes.ts';

export interface FilterLinkProps {
  filter: string,
  currentFilter: string,
  onClick: (string) => void
}

class FilterLink extends React.Component<FilterLinkProps, any> {
  onClick(e) {
    e.preventDefault();
    this.props.onClick(this.props.filter);
  }
  render() {
    const { filter, currentFilter, children } = this.props;

    if(filter === currentFilter) {
      return <span className="filterLink">{children}</span>
    }

    return (
      <a href="#" className="filterLink" onClick={this.onClick.bind(this)}>{children}</a>
    );
  }
}

export default FilterLink;