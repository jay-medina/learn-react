import React from 'react';
import ReactDOM from 'react-dom';


const App = React.createClass({
  render() {
    const txt = this.props.txt;
    return (
      <div>
        <h1>{txt}</h1>
      </div>
    );
  }
});

App.propTypes = {
  txt: React.PropTypes.string,
  cat: React.PropTypes.number.isRequired
}

App.defaultProps = {
  cat: 20,
  txt: 'this is the default txt'
};


ReactDOM.render(
  <App txt="this is the props text" />,
  document.getElementById('app')
);