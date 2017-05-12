import React from 'react';
import PropTypes from 'prop-types';


class PlayerInfo extends React.PureComponent {
  render() {
    const {playerName, playerImage} = this.props;
    return (
      <div className="column">
        <img className="avatar" src={playerImage} />
        <h2 className="username">@{playerName}</h2>
        {this.props.children}
      </div>
    )
  }
}

PlayerInfo.proptypes = {
  playerName: PropTypes.string.isRequired,
  playerImage: PropTypes.string.isRequired,
};



export default PlayerInfo;
