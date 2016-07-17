import * as React from 'react';
import ThreadHeader from './threadHeader.tsx';
import ThreadBody from './threadBody.tsx';
import ThreadNode from './threadNode.tsx';
import ThreadReply from './threadReply.tsx';

export interface ThreadProps {
  threadNodes: any[]
}

class Thread extends React.Component<ThreadProps, {}> {
  renderFirst(node) {
    return <ThreadHeader>{node.text}</ThreadHeader>;
  }
  renderRest(nodes) {
    const threadNodes = nodes.map(node => {
      return <ThreadNode>node.text</ThreadNode>;
    });
  }
  render() {
    const {threadNodes} = this.props;
    const first = threadNodes[0];
    const rest = threadNodes.slice(1);

    return (
      <div className="thread">
        {this.renderFirst(first)}
        <ThreadBody>
          {this.renderRest(rest)}
          <ThreadReply />
        </ThreadBody>
      </div>
    );
  }
}

export default Thread;