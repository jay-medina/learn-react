var React = require('react');

var Main = React.createClass({
  render() {
    return (
      <div className='main-container'> 
        { this.props.children }
      </div>
    );
  }
});

module.exports = Main;