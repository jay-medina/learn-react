import * as React from 'react';
import ThreadNode from './threadNode.tsx';

export interface ThreadStarterState {
  starterActivated: boolean
}

class ThreadStarter extends React.Component<{}, ThreadStarterState> {
  constructor() {
    super();

    this.state = {
      starterActivated: false
    };
  }
  onClick() {
    this.setState({starterActivated: true});
  }
  renderInitialView() {
    return (
      <div onClick={this.onClick.bind(this)} className="threadStarter">
        Share something...
      </div>
    );
  }
  renderAfterClickView() {
    return (
      <div className="activate">
        <textarea type="text" className="threadStarter" autoFocus/>
        <div className="buttonContainer">
        <button className="postBtn">Post</button>
        </div>
      </div> 
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
