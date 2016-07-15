import * as React from 'react';

export interface ThreadNodeProps {
  className?: string
}
class ThreadNode extends React.Component<ThreadNodeProps, {}> {
  getClassNames() {
    const {className} = this.props; 
    
    return (className)? className : 'threadNode';
  }
  render() {
    return (
      <div className={this.getClassNames()}>
        {this.props.children}
      </div>
    );
  }
}

export default ThreadNode;