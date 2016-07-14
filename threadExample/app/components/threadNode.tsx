import * as React from 'react';

export interface ThreadNodeProps {
  className?: string
}
class ThreadNode extends React.Component<ThreadNodeProps, {}> {
  render() {
    return (
      <div className={this.props.className + " threadNode"}>
        {this.props.children}
      </div>
    );
  }
}

export default ThreadNode;