import * as React from 'react';

class ThreadNode extends React.Component<{}, {}> {
  render() {
    return (
      <div className="threadNode">
        {this.props.children}
      </div>
    );
  }
}

export default ThreadNode;