import * as React from 'react';

class ThreadReply extends React.Component<{}, {}> {
  render() {
    return (
      <div className="threadReply">
        <input type="text" className="thread__replyInput" placeholder="Write a comment..." />
      </div>
    );
  }
}

export default ThreadReply;