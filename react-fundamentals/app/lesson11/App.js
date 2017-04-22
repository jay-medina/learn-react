import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.update = this.update.bind(this);
    this.state = {increasing: false};
  }
  update() {
   this.props.update();
  }
  componentWillReceiveProps(nextProps) {
    this.setState({increasing: nextProps.val > this.props.val});
  }
  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.val % 5 === 0;
  }
  render() {
    console.log(this.state.increasing);
    return (
      <button onClick={this.update}>{this.props.val}</button>
    );
  }
  componentDidUpdate(prevProps, prevState) {
    console.log(`prevProps: ${prevProps.val}`);
  }
}

App.defaultProps = {
  val : 0,
  update: () => {},
};

export default App;