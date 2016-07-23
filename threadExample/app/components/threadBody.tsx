import * as React from 'react';

class ThreadBody extends React.Component<{}, {}> {
  render() {
    return (
      <div className="threadBody">
        {this.props.children}
       </div>
    );
  }
}

export default ThreadBody;