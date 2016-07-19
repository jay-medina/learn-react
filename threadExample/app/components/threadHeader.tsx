import * as React from 'react';
import ThreadNode from './threadNode.tsx';

export interface ThreadHeaderProps {
  person: string
}
class ThreadHeader extends React.Component<ThreadHeaderProps, {}> {
  render() {
    return (
      <ThreadNode className="threadHeader" person={this.props.person}>
        {this.props.children}
       </ThreadNode>
    );
  }
}

export default ThreadHeader;