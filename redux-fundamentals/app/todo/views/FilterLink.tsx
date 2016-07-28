import * as React from 'react';
import ActionTypes from '../reducers/ActionTypes.ts';

export interface FilterLinkProps {
  filter: string,
  currentFilter: string,
  dispatch: (any) => void
}

class FilterLink extends React.Component<FilterLinkProps, any> {
  onClick(e) {
    e.preventDefault();
    const {dispatch, filter} = this.props;

    dispatch({
      filter,
      type: ActionTypes.SET_VISIBILITY_FILTER
    });
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