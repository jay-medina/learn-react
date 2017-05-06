import React from 'react';
import PlayerInput from './playerInput';
import PlayerInfo from './playerInfo';

class Battle extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      playerOne: '',
      playerTwo: '',
      playerOneImage: '',
      playerTwoImage: '',
    };
    this.updatePlayer = this.updatePlayer.bind(this);
  }
  updatePlayer(id, username) {
    this.setState(() => {
      return {
        [id]: username,
        [id + 'Image']: `https://github.com/${username}.png?size=200`,
      };
    })
  }
  renderPlayer(player, input, component) {
    if(player) {
      return component;
    } else {
      return input;
    }
  }
  render() {
    const {playerOne, playerTwo, playerOneImage, playerTwoImage} = this.state;

    return (
      <div >
        <div className="row">
          {
            this.renderPlayer(
              playerOne, 
              <PlayerInput id="playerOne" name={'Player One'} updatePlayer={this.updatePlayer} />,
              <PlayerInfo playerName={playerOne} playerImage={playerOneImage} />,
            )
          }
          {
            this.renderPlayer(
              playerTwo, 
              <PlayerInput id="playerTwo" name={'Player Two'} updatePlayer={this.updatePlayer} />,
              <PlayerInfo playerName={playerTwo} playerImage={playerTwoImage} />,
            )
          }
        </div>
      </div>
    );
  }
}

export default Battle;
