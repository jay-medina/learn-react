import * as React from 'react';

class Thread extends React.Component<{}, {}> {
  render() {
    return (
      <div className="thread">
        {this.props.children}
      </div>
    );
  }
}

export default Thread;