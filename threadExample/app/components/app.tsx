import * as React from 'react';
import Thread from './thread.tsx';
import ThreadBody from './threadBody.tsx';
import ThreadNode from './threadNode.tsx';
import ThreadReply from './threadReply.tsx';

export class App extends React.Component<{}, {}> {
  render() {
    return (
      <Thread>
       <ThreadNode className="threadHeader">
        Thread Header - Hello World
       </ThreadNode>
       <ThreadBody>
         <ThreadNode>Hello World</ThreadNode>
         <ThreadNode>Hi World</ThreadNode>
         <ThreadNode>Waiting until my phone comes back</ThreadNode>
         <ThreadNode>Sigh...</ThreadNode>
         <ThreadReply />
       </ThreadBody>
       
      </Thread>
    );
  }
}
