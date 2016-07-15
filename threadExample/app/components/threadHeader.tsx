import * as React from 'react';
import ThreadNode from './threadNode.tsx';

class ThreadHeader extends React.Component<{}, {}> {
  render() {
    return (
      <ThreadNode className="threadHeader">
        {this.props.children}
       </ThreadNode>
    );
  }
}

export default ThreadHeader;