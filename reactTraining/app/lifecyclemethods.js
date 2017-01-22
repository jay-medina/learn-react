var React = require("react");
const ParentComponent = React.createClass({
  getDefaultProps: function() {
    console.log("ParentComponent - getDefaultProps");
  },
  getInitialState: function() {
    console.log("ParentComponent - getInitialState");
    return { text: "" };
  },
  componentWillMount: function() {
    console.log("ParentComponent - componentWillMount");
  },
  render: function() { 
    console.log("ParentComponent - render");
    return (
      <div className="container">
        <input
          value={this.state.text}
          onChange={this.onInputChange} />
        <ChildComponent text={this.state.text} />
      </div>
    );
  },
  componentDidMount: function() {
    console.log("ParentComponent - componentDidMount");
  },
  componentWillUnmount: function() {
    console.log("ParentComponent - componentWillUnmount");
  },
  onInputChange: function(e) { 
    this.setState({ text: e.target.value });
  }
});

const ChildComponent = React.createClass({
  getDefaultProps: function() {
    console.log("ChildComponent - getDefaultProps");
  },
  getInitialState: function() {
    console.log("ChildComponent - getInitialState");
    return { dummy: "" };
  },
  componentWillMount: function() {
    console.log("ChildComponent - componentWillMount");
  },
  componentDidMount: function() {
    console.log("ChildComponent - componentDidMount");
  },
  componentWillUnmount: function() {
    console.log("ChildComponent - componentWillUnmount");
  },
  componentWillReceiveProps: function(nextProps) {
    console.log("ChildComponent - componentWillReceiveProps");
    console.log(nextProps);
  },
  shouldComponentUpdate: function(nextProps, nextState) {
    console.log("ChildComponent - shouldComponentUpdate");
    return true;
  },
  componentWillUpdate: function(nextProps, nextState) {
    console.log("ChildComponent - componentWillUpdate");
    console.log("nextProps:");
    console.log(nextProps);
    console.log("nextState:");
    console.log(nextState);
  },
  render: function() { 
    console.log("ChildComponent - render");
    return (
      <div>Props: {this.props.text}</div>
    );
  },
  componentDidUpdate: function(previousProps, previousState) {
    console.log("ChildComponent - componentDidUpdate");
    console.log("previousProps:");
    console.log(previousProps);
    console.log("previousState:");
    console.log(previousState);
  }
});

module.exports = ParentComponent;