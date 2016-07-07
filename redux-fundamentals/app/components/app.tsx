import * as React from 'react';
import Sample from './sample.tsx';

export interface HelloProps {
  compiler: string,
  framework: string
}

class Hello extends React.Component<HelloProps, {}> {
  render() {
    return (
      <h1>
        Hello from {this.props.compiler} and {this.props.framework}!
        <Sample>hello world number 2</Sample>
      </h1>
    );
  }
}

export {
  Hello
};
