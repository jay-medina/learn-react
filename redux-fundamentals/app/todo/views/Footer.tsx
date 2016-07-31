import * as React from 'react';
import FilterLink from './FilterLink.tsx';

export interface FooterProps {
  store: any
}

class Footer extends React.Component<FooterProps,{}> {
  render() {
    return (
      <p>
        Show:
        <FilterLink filter='SHOW_ALL' {...this.props}>All</FilterLink>
        <FilterLink filter='SHOW_ACTIVE' {...this.props}>Active</FilterLink>
        <FilterLink filter='SHOW_COMPLETED' {...this.props}>Completed</FilterLink>
      </p>
    );
  }
}

export default Footer;