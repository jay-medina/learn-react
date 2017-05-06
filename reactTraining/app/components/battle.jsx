import React from 'react';
import Player from './player';

class Battle extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      playerOne: '',
      playerTwo: '',
      playerOneImage: '',
      playerTwoImage: '',
    };
    this.updatePlayerOne = this.updatePlayerOne.bind(this);
    this.updatePlayerTwo = this.updatePlayerTwo.bind(this);
  }
  updatePlayerOne(username) {
    this.updatePlayer('playerOne', username);
  }
  updatePlayerTwo(username) {
    this.updatePlayer('playerTwo', username);
  }
  updatePlayer(id, username) {
    this.setState(() => {
      return {
        [id]: username,
        [id + 'image']: `https://github.com/${username}.png?size=200`,
      };
    })
  }
  render() {
    console.log(JSON.stringify(this.state));
    return (
      <div className="battle-container" >
        <Player name={'Player One'} updatePlayer={this.updatePlayerOne} />
        <Player name={'Player Two'} updatePlayer={this.updatePlayerTwo}/>
      </div>
    );
  }
}

export default Battle;
