import * as React from 'react';
import ThreadNode from './threadNode.tsx';
import PostButton from './postButton.tsx';

import {ActionTypes} from '../reducers/ThreadReducer.ts';

export interface ThreadReplyProps {
  dispatch: (any) => void,
  person: string,
  thread_id: string
}
export interface ThreadReplyState {
  replyActivated?: boolean,
  replyText?: string
}

class ThreadReply extends React.Component<ThreadReplyProps, ThreadReplyState> {
  constructor() {
    super();

    this.state = {
      replyActivated: false,
      replyText: ''
    };
  }
  activateReply() {
    this.setState({replyActivated: true});
  }
  updateReplyText(e) {
    this.setState({replyText: e.target.value});
  }
  createReply(e) {
    e.preventDefault();
    const {dispatch, person, thread_id} = this.props;
    
    dispatch({
      person,
      thread_id,
      type: ActionTypes.ADD_POST,
      text: this.state.replyText
    });

    this.setState({replyActivated: false, replyText: ''});
  }
  renderInitialView() {
    return (
      <ThreadNode className="threadReply start">
        <div onClick={this.activateReply.bind(this)} className="thread__replyInput">
          Write a Reply
        </div>
      </ThreadNode>
    );
  }
  renderAfterClickView() {
    return (
      <form className="threadReply start" onSubmit={this.createReply.bind(this)}>
        <input type="text" onChange={this.updateReplyText.bind(this)} className="thread__replyInput" autoFocus/> 
        <PostButton />
      </form>
    )
  }
  render() {
    if(this.state.replyActivated) {
      return this.renderAfterClickView();
    }
    
    return this.renderInitialView();
  }
}

export default ThreadReply;
