import * as React from 'react';
import * as ReactDOM from 'react-dom';

class App extends React.PureComponent {
  constructor() {
    super();
    this.state = {val: 0};
    this.update = this.update.bind(this);
  }
  update() {
    this.setState({ val: this.state.val + 1});
  }
  componentWillMount() {
    //before render
    console.log('component will mount');
    this.setState({m: 2});
  }
  render() {
    console.log('render');
    return (
      <button onClick={this.update}>{this.state.val * this.state.m}</button>
    );
  }
  componentDidMount() {
    //after render
    console.log('component did mount');
    this.inc = setInterval(this.update, 500);
  }
  componentWillUnmount() {
    console.log('component will unmount');
    clearInterval(this.inc);
  }
  
}

class Wrapper extends React.PureComponent {
  constructor(props){
    super(props);
    this.mount = this.mount.bind(this);
    this.unmount = this.unmount.bind(this);
  }
  mount() {
    ReactDOM.render(<App />, document.querySelector('.apples'));
  }
  unmount() {
    ReactDOM.unmountComponentAtNode(document.querySelector('.apples'));
  }
  render() {
    return (
      <div>
        <button onClick={this.mount}>Mount</button>
        <button onClick={this.unmount}>Unmount</button>
        <a className="apples"></a>
      </div>
    );
  }
}


export default Wrapper;