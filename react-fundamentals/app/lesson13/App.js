import * as React from 'react';
import NumInput from './NumInput.jsx';

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
  update(data) {
    const f = {};
    f[data.label.toLowerCase()] = data.value;
    this.setState(f);
  }
  render() {
    return (
      <div>
        <Slider val={+this.state.red}
                label="Red"
                update={this.update}  />
        <Slider val={+this.state.green}
                label="Green"
                update={this.update}  />
        <Slider val={+this.state.blue}
                label="Blue"
                update={this.update}  />
        <ColorBoard {...this.state}/>
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

const Slider = function(props) {
  return <NumInput min={0}
                   max={255}
                   {...props}
                   />
};

export default App;