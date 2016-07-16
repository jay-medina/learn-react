import * as React from 'react';
import Thread from './thread.tsx';
import ThreadStarter from './threadStarter.tsx';
import ThreadHeader from './threadHeader.tsx';
import ThreadBody from './threadBody.tsx';
import ThreadNode from './threadNode.tsx';
import ThreadReply from './threadReply.tsx';

export class App extends React.Component<{}, {}> {
  render() {
    return (
      <div className="app">
      <ThreadStarter></ThreadStarter>
      <Thread>
       <ThreadHeader>
        Thread Header - Hello World
       </ThreadHeader>
       <ThreadBody>
         <ThreadNode>Hello World</ThreadNode>
         <ThreadNode>Hi World</ThreadNode>
         <ThreadNode>Waiting until my phone comes back</ThreadNode>
         <ThreadNode>Sigh...</ThreadNode>
         <ThreadReply />
       </ThreadBody>
       
      </Thread>
      </div>
    );
  }
}
