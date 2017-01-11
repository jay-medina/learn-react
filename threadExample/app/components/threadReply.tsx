import * as React from 'react';
import PostButton from './postButton';

import {ActionTypes} from '../reducers/ThreadReducer';

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
    const replyText = e.target.value.trim();
    this.setState({replyText});
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
      <div className="threadReply start">
        <div onClick={this.activateReply.bind(this)} className="thread__replyInput">
          Write a Reply
        </div>
      </div>
    );
  }
  renderAfterClickView() {
    return (
      <form className="threadReply start" onSubmit={this.createReply.bind(this)}>
        <input type="text" onChange={this.updateReplyText.bind(this)} className="thread__replyInput" autoFocus/> 
        <PostButton active={this.state.replyText.length > 0} />
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
