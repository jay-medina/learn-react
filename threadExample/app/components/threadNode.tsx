import * as React from 'react';
import DateHelper from './DateHelper';

export interface ThreadNodeProps {
  className?: string,
  person? : string,
  timestamp? : number,
  allowDelete?: boolean,
  onDeleteClicked?: () => void
}

class ThreadNode extends React.Component<ThreadNodeProps, {}> {
  getClassNames() {
    const {className} = this.props; 
    
    return (className)? `${className} threadNode` : 'threadNode';
  }
  onDeleteClick() {
    this.props.onDeleteClicked();
  }
  getNodeTitle() {
    const {person, timestamp} = this.props;
    if(person && timestamp) {
      return (
        <div className="nodeTitle">
          <div className="personName">
            <span className="nodePerson">{person}</span> - 
            <span className="nodeTimestamp">{DateHelper.formatDate(timestamp)}</span>
          </div>
          <div className="deleteThread" onClick={this.onDeleteClick.bind(this)}>
            Delete
          </div>
        </div>
      )
    }
  }
  render() {
    return (
      <div className={this.getClassNames()}>
        {this.getNodeTitle()}
        {this.props.children}
      </div>
    );
  }
}

export default ThreadNode;