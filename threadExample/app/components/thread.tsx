import * as React from 'react';
import ThreadHeader from './threadHeader.tsx';
import ThreadBody from './threadBody.tsx';
import ThreadNode from './threadNode.tsx';
import ThreadReply from './threadReply.tsx';

export interface ThreadProps {
  thread_id: string,
  threadNodes: any[],
  dispatch: (any) => void,
  person: string
}

class Thread extends React.Component<ThreadProps, {}> {
  renderFirst(node) {
    return <ThreadHeader person={node.person} timestamp={node.timestamp}>{node.text}</ThreadHeader>;
  }
  renderRest(nodes) {
    return nodes.map(node => {
      return <ThreadNode className="threadRepliedNode" key={node.id} person={node.person} timestamp={node.timestamp}>{node.text}</ThreadNode>;
    });
  }
  render() {
    const {threadNodes, dispatch, person, thread_id} = this.props;
    const first = threadNodes[0];
    const rest = threadNodes.slice(1);

    return (
      <div className="thread">
        {this.renderFirst(first)}
        <ThreadBody>
          {this.renderRest(rest)}
          <ThreadReply thread_id={thread_id} dispatch={dispatch} person={person}/>
        </ThreadBody>
      </div>
    );
  }
}

export default Thread;