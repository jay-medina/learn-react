import * as React from 'react';

export interface ThreadNodeProps {
  className?: string,
  person? : string,
  timestamp? : number
}
class ThreadNode extends React.Component<ThreadNodeProps, {}> {
  getClassNames() {
    const {className} = this.props; 
    
    return (className)? className : 'threadNode';
  }
  getNodeTitle() {
    const {person, timestamp} = this.props;
    if(person && timestamp) {
      return (
        <div className="nodeTitle">{person} - {timestamp}</div>
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