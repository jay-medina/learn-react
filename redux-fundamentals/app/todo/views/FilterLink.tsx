import * as React from 'react';
import ActionTypes from '../reducers/ActionTypes.ts';
import Link from './Link.tsx';

export interface FilterLinkProps {
  filter: string,
  store: any
}

class FilterLink extends React.Component<FilterLinkProps, any> {
  setVisibilityFilter() {
    const {store, filter} = this.props;
    store.dispatch({
      filter,
      type: ActionTypes.SET_VISIBILITY_FILTER
    });
  }
  render() {
    const {filter, store, children} = this.props;
    return (
      <Link active={filter === store.getState().visibilityFilter} onClick={this.setVisibilityFilter.bind(this)}>{children}</Link>
    )
  }
}

export default FilterLink;