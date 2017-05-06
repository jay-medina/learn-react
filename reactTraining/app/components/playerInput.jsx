import React from 'react';
import PropTypes from 'prop-types';

class PlayerInput extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      username: ''
    };

    this.onSubmit = this.onSubmit.bind(this);    
    this.onUserNameChange = this.onUserNameChange.bind(this);
  }
  onUserNameChange(e) {
    const { target } = e;
    this.setState(() => {
      return { username: target.value };
    });
  }
  onSubmit(e) {
    e.preventDefault();
    this.props.updatePlayer(this.props.id, this.state.username);
  }
  render() {
    return (
      <form className="player-container" onSubmit={this.onSubmit}>
        <label className="header" htmlFor="username" >{this.props.name}</label >
        <input id="username" 
          autoComplete="off" 
          onChange={this.onUserNameChange} 
          className="input" 
          placeholder="github username" />
        <button className="button" type="submit" disabled={!this.state.username}>Submit</button>
      </form>
    );
  }
}

PlayerInput.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  updatePlayer: PropTypes.func.isRequired,
}

export default PlayerInput;
