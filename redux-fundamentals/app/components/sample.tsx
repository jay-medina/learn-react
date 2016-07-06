import * as React from 'react';

interface DemoProps {
  text: string;
}

class Demo extends React.Component<DemoProps, {}> {
  render() {
    return (
      <div>
        {this.props.text}
      </div>
    );
  }
}

export default Demo;