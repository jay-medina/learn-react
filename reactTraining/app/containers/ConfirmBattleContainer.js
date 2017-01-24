var React = require('react');
var ConfirmBattle = require('../components/ConfirmBattle');
const { getPlayersInfo } = require('../util/githubHelpers');

var ConfirmBattleContainer = React.createClass({
  getInitialState() {
    return {
      isLoading: true,
      playerInfo: []
    }
  },
  render() {
    return (
      <ConfirmBattle isLoading={this.state.isLoading} 
                     playersInfo={this.state.playerInfo}/>
    )
  },
  componentDidMount() {
    const {playerOne, playerTwo} = this.props.location.query;

    getPlayersInfo([playerOne, playerTwo]).then(playerInfo => {
      this.setState({
        isLoading: false,
        playerInfo: [...playerInfo]
      })
    })
  }
})

module.exports = ConfirmBattleContainer;