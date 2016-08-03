import * as React from 'react';
import ActionTypes from '../reducers/ActionTypes.ts';
import Link from './Link.tsx';

export interface FilterLinkProps {
  filter: string
}

class FilterLink extends React.Component<FilterLinkProps, any> {
  static contextTypes = {
    store: React.PropTypes.object
  };
  
  setVisibilityFilter() {
    const {filter} = this.props;
    this.context.store.dispatch({
      filter,
      type: ActionTypes.SET_VISIBILITY_FILTER
    });
  }
  render() {
    const {filter, children} = this.props;
    const {store} = this.context;
    return (
      <Link active={filter === store.getState().visibilityFilter} onClick={this.setVisibilityFilter.bind(this)}>{children}</Link>
    )
  }
}

export default FilterLink;