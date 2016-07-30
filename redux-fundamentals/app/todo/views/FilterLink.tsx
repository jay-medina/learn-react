import * as React from 'react';
import ActionTypes from '../reducers/ActionTypes.ts';
import Link from './Link.tsx';

export interface FilterLinkProps {
  filter: string,
  dispatch: (any) => void,
  visibilityFilter: string,
}

class FilterLink extends React.Component<FilterLinkProps, any> {
  setVisibilityFilter() {
    const {dispatch, filter} = this.props;
    dispatch({
      filter,
      type: ActionTypes.SET_VISIBILITY_FILTER
    });
  }
  render() {
    const {filter, visibilityFilter, children} = this.props;
    return (
      <Link active={filter === visibilityFilter} onClick={this.setVisibilityFilter.bind(this)}>{children}</Link>
    )
  }
}

export default FilterLink;