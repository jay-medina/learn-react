import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      red: 0,
      green: 0,
      blue: 0
    };
    this.update = this.update.bind(this);
  }
  update(e) {
    this.setState({
      red: ReactDOM.findDOMNode(this.refs.red.refs.inp).value,
      green: ReactDOM.findDOMNode(this.refs.green.refs.inp).value,
      blue: ReactDOM.findDOMNode(this.refs.blue.refs.inp).value
    });
  }
  render() {
    return (
      <div>
        <hr />
        <Slider ref="red" update={this.update}  />
        {this.state.red}
        <Slider ref="green" update={this.update}  />
        {this.state.green}
        <Slider ref="blue" update={this.update}  />
        {this.state.blue}
        <ColorBoard {...this.state} />
      </div>
    );
  }
}

const ColorBoard = function(props) {
  var style = {
    background: `rgb(${props.red},${props.green},${props.blue})`
  };
  return (
    <div style={style} className="colorBoard">

    </div>
  );
};

const Slider = React.createClass({
  render() {
    return (
      <div>
      <input ref="inp"
             type="range" 
             min="0"
             max="255"
             onChange={this.props.update} />
      </div>
    );
  }
});

export default App;