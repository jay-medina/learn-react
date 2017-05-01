import React from 'react';
import Player from './player';

class Battle extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      playerOne: '',
      playerTwo: '',
    };
    this.updatePlayerOne = this.updatePlayerOne.bind(this);
    this.updatePlayerTwo = this.updatePlayerTwo.bind(this);
  }
  updatePlayerOne(username) {
    this.setState(() => {
      return { playerOne: username };
    })
  }
  updatePlayerTwo(username) {
    this.setState(() => {
      return { playerTwo: username };
    });
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
