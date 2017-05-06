import React from 'react';
import PropTypes from 'prop-types';


class PlayerInfo extends React.PureComponent {
  render() {
    const {playerName, playerImage, id} = this.props;
    return (
      <div>
        <div>{playerName}</div>
        <img className="player-image" src={playerImage} />
        <a className="reset" onClick={() => this.props.onReset({ id })}>
          Reset
        </a>
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
