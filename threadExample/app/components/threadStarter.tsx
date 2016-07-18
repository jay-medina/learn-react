import * as React from 'react';
import ThreadNode from './threadNode.tsx';
import PostButton from './postButton.tsx';

import {ActionTypes} from '../reducers/MultiThreadReducer.ts';

export interface ThreadStarterProps {
  dispatch: (any) => void,
  person: string
}
export interface ThreadStarterState {
  starterActivated?: boolean,
  starterText?: string
}

class ThreadStarter extends React.Component<ThreadStarterProps, ThreadStarterState> {
  constructor() {
    super();

    this.state = {
      starterActivated: false,
      starterText: ''
    };
  }
  activateStarter() {
    this.setState({starterActivated: true});
  }
  deactivateStarter(e) {
    if(this.state.starterText.length === 0) {
      this.setState({starterActivated:false});
    }
  }
  updateStarterText(e) {
    const starterText = e.target.value.trim();
    this.setState({starterText});
  }
  createThread(e) {
    e.preventDefault();
    const {dispatch, person} = this.props;

    dispatch({
      person,
      type: ActionTypes.CREATE_THREAD,
      text: this.state.starterText
    });

    this.setState({starterActivated: false, starterText: ''});
  }
  renderInitialView() {
    return (
       <ThreadNode className="start">
         <div onClick={this.activateStarter.bind(this)} className="threadStarter">
        Share something...
        </div> 
      </ThreadNode>
    );
  }
  renderAfterClickView() {
    return (
      <form className="activate" onSubmit={this.createThread.bind(this)}>
        <textarea onChange={this.updateStarterText.bind(this)}
                  onBlur={this.deactivateStarter.bind(this)} 
                  className="threadStarter" autoFocus/>
        <PostButton active={this.state.starterText.length > 0} />
      </form> 
    )
  }
  render() {
    if(this.state.starterActivated) {
      return this.renderAfterClickView();
    }
    
    return this.renderInitialView();
  }
}

export default ThreadStarter;
