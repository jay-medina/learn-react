import React from 'react';
import PropTypes from 'prop-types';


class PlayerInfo extends React.PureComponent {
  render() {
    const {playerName, playerImage, id} = this.props;
    return (
      <div className="column">
        <img className="avatar" src={playerImage} />
        <h2 className="username">@{playerName}</h2>
        <button className="reset" onClick={() => this.props.onReset({ id })}>
          Reset
        </button>
      </div>
    )
  }
}

PlayerInfo.proptypes = {
  id: PropTypes.string.isRequired,
  playerName: PropTypes.string.isRequired,
  playerImage: PropTypes.string.isRequired,
  onReset: PropTypes.func.isRequired,
};



export default PlayerInfo;
