var React = require('react');
var ConfirmBattle = require('../components/ConfirmBattle');

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
    var query = this.props.location.query;
    console.log('Query', query);
    //Fetch info from github
  }
})

module.exports = ConfirmBattleContainer;