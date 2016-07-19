import * as React from 'react';

export interface ThreadNodeProps {
  className?: string,
  person? : string
}
class ThreadNode extends React.Component<ThreadNodeProps, {}> {
  getClassNames() {
    const {className} = this.props; 
    
    return (className)? className : 'threadNode';
  }
  getNodeTitle() {
    if(this.props.person) {
      return (
        <div className="nodeTitle">{this.props.person}</div>
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