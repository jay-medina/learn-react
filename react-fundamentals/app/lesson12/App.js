import React from 'react';

const Mixin = function (InnerComponent) {
  /*class MixinClass extends React.Component {
    constructor() {
      super();
      this.update = this.update.bind(this);
      this.state = {val: 0};
    }
    update() {
      this.setState({val: this.state.val + 1});
    }
    componentWillMount() {
      console.log('will mount'); 
    }
    componentDidMount() {
      console.log('did mount');
    }
    render() {
      //OVERRIDE
      return (
        <InnerComponent
          update = {this.update}
          {...this.state}
          {...this.props}
          />
      );
    }
  } */

  function MixinClass() {
    React.Component.call(this);
    this.state = {val : 0};
    this.update = this.update.bind(this);
  }

  MixinClass.prototype = Object.create(React.Component.prototype);

  MixinClass.prototype.update = function() {
    this.setState({val: this.state.val + 1});
  };

  MixinClass.prototype.componentWillMount = function() {
    console.log('will mount');
  };

  MixinClass.prototype.render = function() {
    return (
        <InnerComponent
          update = {this.update}
          {...this.state}
          {...this.props}
          />
      );
  };

  return MixinClass;
};

const Button = (props) => <button onClick={props.update}>
                            {props.txt} - {props.val}
                          </button>;

let ButtonMixed = Mixin(Button);

class App extends React.Component {
  render() {
    return (
      <div>
        <ButtonMixed txt="Button"/>
      </div>
    )
  }
}

export default App;