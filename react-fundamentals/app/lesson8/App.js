import React from 'react';

class App extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <Button>I <Heart/> React</Button>
    );
  }
}

class Button extends React.Component {
  render() {
    return <button>{this.props.children}</button>
  }
}

const Heart = () => <span>♥️</span>

export default App;