import * as React from 'react';
import ActionTypes from '../reducers/ActionTypes.ts';

export interface LinkProps {
  active: boolean,
  onClick: () => void
}

class Link extends React.Component<LinkProps, any> {
  onClick(e) {
    e.preventDefault();
    this.props.onClick();
  }
  render() {
    const { active, children } = this.props;

    if(active) {
      return <span className="filterLink">{children}</span>
    }

    return (
      <a href="#" className="filterLink" onClick={this.onClick.bind(this)}>{children}</a>
    );
  }
}

export default Link;