var Prompt = require('../components/Prompt');
var React = require('react');

var PromptContainer = React.createClass({
  getInitialState() {
    return {
      username: ''
    }
  },
  handleSubmitUser(e) {
    e.preventDefault();
    const {username} = this.state;

    this.setState({
      username: ''
    });

    if(this.props.routeParams.playerOne) {
      this.props.router.push({
        pathname: '/battle',
        query: {
          playerOne: this.props.routeParams.playerOne,
          playerTwo: username
        }
      })
    }
    else {
      this.props.router.push('/playerTwo/' + username);
    }
  },
  handleUpdateUser(e) {
    this.setState({username: e.target.value})
  },
  render() {
    return (
      <Prompt header={this.props.route.header}
              username={this.state.username} 
              onUpdateUser={this.handleUpdateUser}
              onSubmitUser={this.handleSubmitUser}/>
    )
  }
});

module.exports = PromptContainer;