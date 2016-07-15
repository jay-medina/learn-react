import * as React from 'react';
import ThreadNode from './threadNode.tsx';

export interface ThreadReplyState {
  replyStarted: boolean
}

class ThreadReply extends React.Component<{}, ThreadReplyState> {
  constructor() {
    super();

    this.state = {
      replyStarted: false
    };
  }
  onClick() {
    this.setState({replyStarted: true});
  }
  renderInitialView() {
    return (
      <div onClick={this.onClick.bind(this)} className="thread__replyInput">
        Write a Reply
      </div>
    );
  }
  renderAfterClickView() {
    return (
      <input type="text" className="thread__replyInput" autoFocus/> 
    )
  }
  renderSubView() {
    if(this.state.replyStarted) {
      return this.renderAfterClickView();
    }
    
    return this.renderInitialView();
  }
  render() {
    return (
      <ThreadNode className="threadReply start">
        {this.renderSubView()}
      </ThreadNode>
    );
  }
}

export default ThreadReply;

/* input type="text" className="thread__replyInput" placeholder="Write a reply" */
