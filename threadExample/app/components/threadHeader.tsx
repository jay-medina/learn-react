import * as React from 'react';
import ThreadNode from './threadNode.tsx';

export interface ThreadHeaderProps {
  person: string,
  timestamp: number
}
class ThreadHeader extends React.Component<ThreadHeaderProps, {}> {
  render() {
    const {person, timestamp, children} = this.props;
    return (
      <ThreadNode className="threadHeader" person={person} timestamp={timestamp}>
        {children}
       </ThreadNode>
    );
  }
}

export default ThreadHeader;