import React from 'react';
import PlayerInput from './playerInput';
import PlayerInfo from './playerInfo';
import { Link } from 'react-router-dom';

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
    this.onReset = this.onReset.bind(this);
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
  onReset({id}) {
    this.setState(() => {
      return {
        [id]: '',
        [id + 'Image']: '',
      };
    });
  }
  renderBattleButton() {
    const {match} = this.props;
    const {playerOne, playerTwo} = this.state;

    if(playerOne && playerTwo) {
      return (
        <div className="row">
          <Link className="button" 
                to={
                   {
                    pathname: match.url + '/results',
                    search: `?playerOneName=${playerOne}&playerTwoName=${playerTwo}`,
                   }
                }>Battle</Link>
        </div>
      );
    }
    return '';
  }
  render() {
    const {playerOne, playerTwo, playerOneImage, playerTwoImage} = this.state;
    return (
      <div>
        <div className="row">
          {
            this.renderPlayer(
              playerOne, 
              <PlayerInput id="playerOne" name={'Player One'} updatePlayer={this.updatePlayer} />,
              <PlayerInfo id="playerOne" playerName={playerOne} playerImage={playerOneImage} onReset={this.onReset} />,
            )
          }
          {
            this.renderPlayer(
              playerTwo, 
              <PlayerInput id="playerTwo" name={'Player Two'} updatePlayer={this.updatePlayer} />,
              <PlayerInfo 
                id="playerTwo"
                playerName={playerTwo} 
                playerImage={playerTwoImage} 
                onReset={this.onReset} />,
            )
          }
        </div>
        {this.renderBattleButton()}
      </div>
    );
  }
}

export default Battle;
