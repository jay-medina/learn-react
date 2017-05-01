import React from 'react';
import PropTypes from 'prop-types';

class Player extends React.PureComponent {
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
    this.props.updatePlayer(this.state.username);
  }
  render() {
    return (
      <form className="player-container" onSubmit={this.onSubmit}>
        <span>{this.props.name}</span>
        <input onChange={this.onUserNameChange} className="input" placeholder="github username" />
        <button className="button">Submit</button>
      </form>
    );
  }
}

Player.propTypes = {
  name: PropTypes.string.isRequired,
  updatePlayer: PropTypes.func.isRequired,
}

export default Player;
