import * as React from 'react';
import * as DateHelper from './DateHelper.ts';

export interface ThreadNodeProps {
  className?: string,
  person? : string,
  timestamp? : number,
  allowDelete?: boolean
}
class ThreadNode extends React.Component<ThreadNodeProps, {}> {
  getClassNames() {
    const {className} = this.props; 
    
    return (className)? `${className} threadNode` : 'threadNode';
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
         <div className="deleteThread">
           Delete
         </div>
        </div>
      )
    }
    return <span></span>;
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