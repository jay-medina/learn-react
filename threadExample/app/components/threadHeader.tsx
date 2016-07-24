import * as React from 'react';
import ThreadNode from './threadNode.tsx';

export interface ThreadHeaderProps {
  person: string,
  timestamp: number,
  onDeleteClicked: () => void
}
class ThreadHeader extends React.Component<ThreadHeaderProps, {}> {
  render() {
    return (
      <ThreadNode className="threadHeader" {...this.props}>
        {this.props.children}
       </ThreadNode>
    );
  }
}

export default ThreadHeader;