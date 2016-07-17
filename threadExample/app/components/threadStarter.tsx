import * as React from 'react';
import ThreadNode from './threadNode.tsx';
import {ActionTypes, MultiThreadAction} from '../reducers/MultiThreadReducer.ts';

export interface ThreadStarterProps {
  store: any,
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
  updateStarterText(e) {
    this.setState({starterText: e.target.value});
  }
  createThread(e) {
    e.preventDefault();
    const {store, person} = this.props;

    store.dispatch({
      person,
      type: ActionTypes.CREATE_THREAD,
      text: this.state.starterText
    });

    this.setState({starterActivated: false, starterText: ''});
  }
  renderInitialView() {
    return (
      <div onClick={this.activateStarter.bind(this)} className="threadStarter">
        Share something...
      </div>
    );
  }
  renderAfterClickView() {
    return (
      <form className="activate" onSubmit={this.createThread.bind(this)}>
        <textarea onChange={this.updateStarterText.bind(this)} type="text" className="threadStarter" autoFocus/>
        <div className="buttonContainer">
        <button className="postBtn">Post</button>
        </div>
      </form> 
    )
  }
  renderSubView() {
    if(this.state.starterActivated) {
      return this.renderAfterClickView();
    }
    
    return this.renderInitialView();
  }
  render() {
    return (
      <ThreadNode className="start">
        {this.renderSubView()}
      </ThreadNode>
    );
  }
}

export default ThreadStarter;
